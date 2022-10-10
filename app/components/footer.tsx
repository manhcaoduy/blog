import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <div className={'my-10'}>
        <div className={'flex gap-4 mx-auto w-fit'}>
          <Link href="https://twitter.com/KooYooMan">
            <a className={'font-bold text-blue-200 underline'}>Twitter</a>
          </Link>
          <div>|</div>
          <Link href="https://www.linkedin.com/in/manhcaoduy1912/">
            <a className={'font-bold text-blue-200 underline'}>Linkedin</a>
          </Link>
          <div>|</div>
          <Link href="https://github.com/manhcaoduy">
            <a className={'font-bold text-blue-200 underline'}>Github</a>
          </Link>
        </div>
      </div>
    </>
  );
}
