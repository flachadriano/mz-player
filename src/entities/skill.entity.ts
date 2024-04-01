export class Skill {
    level; evolved = 0;
    max = false;

    static read(skillRaw: string): Skill {
        const skill = new Skill();
        skill.level = Number(skillRaw.split('+')[0].replace('-', ''));

        if (skillRaw.indexOf('+') >= 0) {
            skill.evolved = Number(skillRaw.split('+')[1].replace('-', ''));
        }
        if (skillRaw.indexOf('-') >= 0) {
            skill.max = true;
        }
        return skill;
    }
}