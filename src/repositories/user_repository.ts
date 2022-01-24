import { getConnection } from "typeorm";
import { User } from "../entities/user";

export function getRepository() {
    const conn = getConnection();
    const movieRepository = conn.getRepository(User);
    return movieRepository;
}
