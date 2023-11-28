import { ResumeData } from '../info/ResumeData';
import '../styles/resume.css';

export default function Resume() {
  return (
    <div className="Resume">
      <section>
        <div className="Top">
          <h1>{ResumeData.name}</h1>
          <h3>{ResumeData.location}</h3>
        </div>
      </section>

      <section>
        <h2>Profile</h2>
        <ul className="ProfileBullets">
          {ResumeData.profile.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Tech Skills</h2>
        <div className="TechSkills">
          {ResumeData.skills.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </div>
      </section>

      <section>
        <h2>Education</h2>
        <br />
        <div className="Education">
          {ResumeData.education.map((info, i) => (
            <hgroup key={i}>
              <h5>{info.field}</h5>
              <p>{info.institution}</p>
            </hgroup>
          ))}
        </div>
        <h2>Technical Certifications</h2>
        <br />
        <div className="Education">
          {ResumeData.technicalCertifications.map((cert, i) => (
            <ul key={i}>
              <li>
                {cert.certificateName} {cert.certificateDetails}
              </li>
            </ul>
          ))}
        </div>
      </section>
      <section>
        <h2>Experience</h2>
        <div className="ExperienceText">
          {ResumeData.workExp.map((info, i) => (
            <section className="Job" key={i}>
              <h3>{info.jobTitle}</h3>
              <p>{info.companyName}</p>
              <p>{info.location}</p>
              <p>{info.duration}</p>

              {info.bullets.map((bullet, i) => (
                <ul key={i}>
                  <li>{bullet}</li>
                </ul>
              ))}
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
