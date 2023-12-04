import BodyBlock, { BodyBlockProps } from './BodyBlock';

export default {
  title: 'Components/BodyBlock',
  component: BodyBlock,
  tags: ['autodocs'],
};

const defaultArgs: BodyBlockProps = {
  intro: `<p><strong>Cheers</strong> to 1 year of shared joy! Explore milestones, celebrate achievements, and <a href="#" target="_blank">embrace creativity</a> in our vibrant digital community.</p>
  <p>Let the strength of knowledge and the power of collaboration guide us into the boundless possibilities that lie ahead.</p>
  `,
  content: `
  <p>In the vibrant tapestry of our digital journey, today marks a significant milestone – the 1-year anniversary of our shared exploration of knowledge and creativity. It's a celebration of the community we've built and the joy we've found in the vast expanse of information. As we reflect on this journey, we invite you to join us in commemorating the growth, camaraderie, and discovery that have defined our past year together.</p>
  <p>In this special commemoration, our digital space transforms into a canvas of jubilation. From absorbing the strength of knowledge to embracing the nuances of creativity, this celebration encapsulates the essence of our collective endeavors. Let the HTML markup below be a testament to the joyous spirit that infuses every line of code and every tag that structures our shared experiences. As we delve into the richness of our digital narrative, let's continue this journey with enthusiasm and anticipation for the boundless possibilities that lie ahead.</p>

  <h2>Celebrating 1 Year of Joy!</h2>
  <p>Join us in the <strong>festive</strong> atmosphere as we <em>embrace</em> the joy of <strong>learning</strong> and <em>creating</em> together.</p>
  <h3>Highlights of the Year:</h3>
  <ul>
      <li>Exciting <strong>milestones</strong></li>
      <li>Memorable <em>achievements</em></li>
      <li>Collaborative <strong>success</strong></li>
  </ul>
  <h4>Looking Forward:</h4>
  <p>As we move forward, let's continue to <em>inspire</em> and <strong>innovate</strong> with <a href="https://www.example.com" target="_blank">passion</a>.</p>
  <h3>Celebrate with Us!</h3>
  <ol>
      <li>Share your <strong>favorite moments</strong></li>
      <li>Connect with fellow <em>enthusiasts</em></li>
      <li>Spread the <strong>joy</strong></li>
  </ol>
  `,
};

export const BasicWithLinks = {
  args: defaultArgs,
};
