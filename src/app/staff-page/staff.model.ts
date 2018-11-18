export class NewStaff {
    name: string;
    height: number;
    eye_color: string;

    constructor(name: string, height: number, eye_color: string) {
        this.name = name;
        this.height = height;
        this.eye_color = eye_color;
    }
}

export class Staff {
    name: string;
    skills: Skill[];

    constructor(name: string, skills?: Skill[]) {
        this.name = name;
        this.skills = skills || []
    }

}

export class Skill {
    name: string;
    desc: string;

    constructor(name: string, desc: string) {
        this.name = name;
        this.desc = desc;
    }
}

