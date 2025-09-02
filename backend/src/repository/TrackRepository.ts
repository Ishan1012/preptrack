import { Repository } from "typeorm";
import { Track } from "../model/Track";
import { PostgresDataSource } from "../config/database";

export class TrackRepository {
    private repository: Repository<Track>;

    constructor() {
        this.repository = PostgresDataSource.getRepository(Track);
        console.log("done");
    }

    async createAndSave(track: Track): Promise<Track> {
        const createdTrack = this.repository.create(track);
        return this.repository.save(createdTrack);
    }
}