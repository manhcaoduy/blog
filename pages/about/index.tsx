export default function About() {
  return (
    <>
      <div className={"float-right font-bold"}>
        Last update: Oct 15th 2022.
      </div>
      <div className={"clear-right"}></div>

      <div className={"text-lg"}>
        <div className={"my-5"}>
          Hello. I am Manh. A backend software developer in Autonomous Inc.
        </div>
        <div className={"my-10"}>
          My job is mainly building, maintaining the baackend systen for Rove - an immersive 3D worlds exploration application both available on Web and Mobile.
          <a className={"hover:text-red-400"} href="https://rove.to/"> Check it out.</a>
        </div>
        <div className={"my-10"}>
          I'm also interested in distributed system, computer science from root perspective, and personal financial
        </div>
        <div className={"my-10"}>
          My goal now is trying to be productive, useful person and be financial independence as soon as possible.
        </div>
      </div>
    </>
  );
}
