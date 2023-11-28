import '../contact/contact.css';

export default function Contact() {
  return (
    <div className="contactPage">
      <h1>Contact Me</h1>
      <p>
        Click on the following below view my LinkedIn, Github or to email me.
      </p>
      <div>
        <a
          href="https://www.linkedin.com/in/john-wrimene-3b0735228/"
          target="_blank"
        >
          <i class="fab fa-linkedin fa-3x i"></i>
        </a>
        <a href="https://github.com/J0hn316" target="_blank">
          <i class="fab fa-github-square fa-3x i"></i>
        </a>
        <a href="mailto:jcordell316@gmail.com" target="_blank">
          <i class="fa fa-envelope-square fa-3x i"></i>
        </a>
      </div>
    </div>
  );
}
