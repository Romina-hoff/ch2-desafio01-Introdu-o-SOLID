import { User } from "../../model/User"
import { IUsersRepository } from "../../repositories/IUsersRepository"

interface IRequest {
  name: string
  email: string
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  execute({ email, name }: IRequest): User {
   const userAlredyExists = this.usersRepository.findByEmail(email)

   if(userAlredyExists){
    throw new Error("Email alredy exists")
   }
    
   const newUser = this.usersRepository.create({ name, email });

   return newUser;
  }
}

export { CreateUserUseCase }
