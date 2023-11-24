interface ISkill {
  skillName: string;
  skillType: string;
}

interface ISkillsForType {
  skillsForType: Array<ISkill>;
}

const SkillsForType = ({ skillsForType }: ISkillsForType) => {
  return (
    <>
      {skillsForType.map((skill) => {
        return (
          <tr key={skill.skillName}>
            <td>{skill.skillName}</td>
          </tr>
        );
      })}
    </>
  );
};

export default SkillsForType;
