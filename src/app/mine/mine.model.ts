import { Resource } from "../resource/resource.model";

export class Mine {
    constructor(
        public id: number,
        public startedAt: Date,
        public player_id: number,
        public created_at: Date,
        public updated_at: Date,
        public level: number,
        public currentTargetResourceId: number,
        public remainTimeInMinute: number,
        public resource: Resource
    ) {}
}