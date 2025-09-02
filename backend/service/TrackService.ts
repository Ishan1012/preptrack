import { Track } from "../model/Track";
import { TrackRepository } from "../repository/TrackRepository";

export class TrackService {
    private trackRepository: TrackRepository;

    constructor() {
        this.trackRepository = new TrackRepository();
        this.trackRepository.createAndSave
    }

    async create(track: Track): Promise<Track> {
        return this.trackRepository.createAndSave(track);
    } 
}