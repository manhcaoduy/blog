export default function Footer() {
  return (
    <>
      <div className={'my-10'}>
        <div className={'flex gap-4 mx-auto w-fit'}>
          <a
            target={'_blank'}
            rel={'noreferrer'}
            href="https://twitter.com/KooYooMan"
            className={'font-bold text-blue-200 underline'}
          >
            Twitter
          </a>
          <div>|</div>
          <a
            target={'_blank'}
            rel={'noreferrer'}
            href="https://www.linkedin.com/in/manhcaoduy1912/"
            className={'font-bold text-blue-200 underline'}
          >
            Linkedin
          </a>
          <div>|</div>
          <a
            target={'_blank'}
            rel={'noreferrer'}
            href="https://github.com/manhcaoduy"
            className={'font-bold text-blue-200 underline'}
          >
            Github
          </a>
        </div>
      </div>
    </>
  );
}
