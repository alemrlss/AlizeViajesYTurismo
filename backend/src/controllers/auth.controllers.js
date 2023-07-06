import { isValidObjectId } from 'mongoose'
import bcrypt from 'bcrypt'

import User from '../models/user.model.js'
import { createAccessToken } from '../libs/jwt.js'

// ✔ CREATE creamos un usuario
export const registerUser = async (req, res) => {
  const { username, password, email } = req.body
  try {
    const newUser = User({
      username,
      password: await bcrypt.hashSync(password, 10),
      email
    })

    const user = newUser.toJSON()

    delete user.password

    await newUser.save()

    const token = await createAccessToken({ id: user._id })
    res.cookie('token', token)
    res.status(200).json(user)
  } catch (error) {
    console.log(error.message)
    if (error.code === 11000) {
      return res.status(400).json({ success: false, message: 'el correo ya esta en uso' })
    }
    return res.status(400).json({ success: false, message: 'Bad request' })
  }
}

// ✔ READ leemos el usuario
export const loginUser = async (req, res) => {
  const { email, password } = req.body
  console.log(req.body)
  try {
    const userFind = await User.findOne({ email })
    if (!userFind) return res.status(404).json({ message: 'Create un usuario seco' })
    if (!bcrypt.compareSync(password, userFind.password)) return res.status(401).json({ message: 'credenciales invalidas' })
    const token = await createAccessToken({ id: userFind._id })

    const user = userFind.toJSON()
    delete user.password
    res.cookie('token', token)
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ success: false, message: 'Bad request' })
  }
}

// UPDATE actualizamos el usuario id que da mongo "649a01d325720a3554c252c4"

export const updateUser = async (req, res) => {
  const { username, password, email } = req.body
  const { id } = req.params


  if (!isValidObjectId(id)) return res.status(400).json({ message: 'el id de mongo no es un id valido' })

  try {
    const newUser = await User.findByIdAndUpdate(id, { username, password, email }, { new: true })

    res.status(200).json(newUser)
  } catch (error) {
    console.log(error)
    res.status(404).json({ message: 'Bad request 💥' })
  }
}

// DELETE eliminamos un usuario
export const deleteUser = async (req, res) => {
  const { id } = req.params
  if (!isValidObjectId(id)) return res.status(400).json({ message: 'el id de mongo no es un id valido' })
  try {
    const deleteUser = await User.findByIdAndDelete(id)

    if (!deleteUser) return res.status(400).json({ message: 'no existe un usuario por ese id' })

    res.status(200).json(deleteUser)
  } catch (error) {
    res.status(404).json({ message: 'Bad request 💥' })
  }
}

export const logoutUser = (req, res) => {
  res.cookie('token', '', { expires: new Date(0) })
  res.sendStatus(200)
}

export const profileUser = async (req, res) => {
  const { id } = req.user

  const userFind = await User.findById(id)
  if (!userFind) return res.status(400).json({ message: 'no existe un usuario por ese id' })

  const user = userFind.toJSON()
  delete user.password

  res.status(200).json(user)
}