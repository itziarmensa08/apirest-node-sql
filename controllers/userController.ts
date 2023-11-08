
import { Request, Response } from 'express';
import { User } from '../models/userModel';

const getUsers = async (req:Request, res:Response) => {
  try {
    const users = await User.findAll();
    if (users.length > 0) {
      res.status(200).json(users);
    } else {
      res.status(201).json('Aún no hay ningun usuario registrado');
    }
  } catch (e) {
    res.status(500).json({ error: `Hubo un error al obtener usuarios: ${e}` });
  }
};

const postUser = async (req:Request, res:Response) => {
  try {
    const { name, email } = req.body;
    const newUser = await User.create({ name, email });
    res.status(200).json(newUser);
  } catch (e) {
    res.status(500).json({ error: `Hubo un error al crear el usuario: ${e}` });
  }
};

const updateUser = async (req:Request, res:Response) => {
  try {
    const userId = req.params.id;
    const { name, email } = req.body;
    const user = await User.findByPk(userId);

    if (!user) {
      res.status(404).json({ error: 'Usuario no encontrado' });
    } else {
      if (name) {
        user.name = name;
      } else if (email) {
        user.email = email
      }
      await user.save(); 

      res.json(user);
    }
  } catch (e) {
    res.status(500).json({ error: `Hubo un error al actualizar el usuario: ${e}` });
  }
};

const deleteUser = async (req:Request, res:Response) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);

    if (!user) {
      res.status(404).json({ error: 'Usuario no encontrado' });
    } else {
      await user.destroy();
      res.status(200).json({ message: 'Usuario eliminado con éxito' });
    }
  } catch (e) {
    res.status(404).json({ error: `Hubo un error al eliminar el usuario: ${e}`});
  }
};

export { getUsers, postUser, updateUser, deleteUser };
