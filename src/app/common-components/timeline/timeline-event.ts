export class TimelineEvent {

    id: number;
    year: number;
    title: string;
    text: string;
    color: string;
    icon: string;

    constructor(id:number, year: number, title: string, text: string, color: string, icon: string){
        this.id = id;
        this.year = year;
        this.title = title;
        this.text = text;
        this.color = color;
        this.icon = icon;
    }
}
