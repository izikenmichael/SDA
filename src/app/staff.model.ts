import { Skill } from "./skill.model";

export class Staff {
    name: string;
    skills: Skill[];

    constructor(name: string, skills?: Skill[]) {
        this.name = name;
        this.skills = skills || []
    }

    addSkill(newSkill: Skill): void {
        this.skills.push(newSkill);
    }

    deleteSkill(selectedSkill: Skill): void {
        this.skills.filter(item => item !== selectedSkill)
        console.log(this.skills)
    }

}
