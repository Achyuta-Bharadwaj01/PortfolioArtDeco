"use client";

import Image from "next/image";
import Link from "next/link";
import {
  supportSystemIntro,
  supportSystemMembers,
  type SupportSystemMember,
} from "@/lib/constants/about";

function memberPhotoSrc(member: SupportSystemMember) {
  if (member.photoSrc) return member.photoSrc;
  if (member.linkedinUsername) {
    return `https://unavatar.io/linkedin/${member.linkedinUsername}?fallback=false`;
  }
  return null;
}

function ProfileAvatar({ member }: { member: SupportSystemMember }) {
  const photoSrc = memberPhotoSrc(member);
  const initials = member.name
    .split(" ")
    .filter((part) => part.length > 1 && part !== "Dr.")
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return (
    <div className="relative -mt-12 mb-3 h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-cream shadow-[0_4px_14px_rgba(35,32,25,0.12)]">
      {photoSrc ? (
        <Image
          src={photoSrc}
          alt={member.name}
          fill
          unoptimized
          sizes="96px"
          className="object-cover object-top"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-moss/10 font-heading text-2xl text-moss/70">
          {initials}
        </div>
      )}
    </div>
  );
}

function LinkedInMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-current"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function SupportSystemCard({ member }: { member: SupportSystemMember }) {
  const cardBody = (
    <>
      <div className="h-16 bg-gradient-to-r from-moss via-moss to-moss-deep" />

      <div className="flex flex-1 flex-col px-5 pb-5 pt-0">
        <ProfileAvatar member={member} />

        <h3 className="font-body text-lg font-semibold leading-snug text-ink">
          {member.name}
        </h3>

        <p className="mt-2 line-clamp-3 font-body text-sm leading-relaxed text-ink/65">
          {member.headline}
        </p>

        {member.location ? (
          <p className="mt-2 font-body text-xs text-ink/45">{member.location}</p>
        ) : null}

        {member.linkedinUrl ? (
          <div className="mt-auto flex items-center gap-2 border-t border-gold/10 pt-4 text-moss transition-colors duration-300 group-hover:text-moss-deep">
            <LinkedInMark />
            <span className="font-body text-sm font-semibold">View profile</span>
          </div>
        ) : null}
      </div>
    </>
  );

  const cardClassName =
    "group flex h-full flex-col overflow-hidden rounded-lg bg-white text-left shadow-[0_0_0_1px_rgba(35,32,25,0.08),0_8px_24px_-16px_rgba(35,32,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(36,56,42,0.22),0_16px_32px_-18px_rgba(35,32,25,0.34)]";

  if (member.linkedinUrl) {
    return (
      <article>
        <Link
          href={member.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cardClassName}
        >
          {cardBody}
        </Link>
      </article>
    );
  }

  return <article className={cardClassName}>{cardBody}</article>;
}

export function SupportSystemSection() {
  return (
    <section className="bg-cream-soft pb-16 pt-4 sm:pb-20 lg:pb-24 lg:pt-6">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <header className="mb-10 text-center sm:mb-12 lg:mb-14">
          <h2 className="font-heading text-3xl font-normal text-ink sm:text-4xl lg:text-[2.75rem]">
            {supportSystemIntro.heading}
          </h2>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {supportSystemMembers.map((member) => (
            <SupportSystemCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
