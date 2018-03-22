export class Show {
    constructor({id, name, summary, image, seasons = [], cast = []}) {
        this.id = id
        this.title = name
        this.summary = summary
        this.img = image.medium
        this.seasons = seasons
        this.cast = cast 
    }
}