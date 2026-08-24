import React from "react";

export function IndiaFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#f93" d="M0 0h640v160H0z" />
      <path fill="#fff" d="M0 160h640v160H0z" />
      <path fill="#128807" d="M0 320h640v160H0z" />
      <g transform="matrix(3.2 0 0 3.2 320 240)">
        <circle r="20" fill="#008" />
        <circle r="17.5" fill="#fff" />
        <circle r="3.5" fill="#008" />
        <g id="d">
          <g id="c">
            <g id="b">
              <g id="a">
                <path fill="#008" d="M0-17.5V-3.5L.8-14zM0-17.5V-3.5L-.8-14z" />
              </g>
              <use href="#a" transform="rotate(15)" />
            </g>
            <use href="#b" transform="rotate(30)" />
          </g>
          <use href="#c" transform="rotate(60)" />
        </g>
        <use href="#d" transform="rotate(120)" />
        <use href="#d" transform="rotate(240)" />
      </g>
    </svg>
  );
}

export function CanadaFlag({
  className = "w-5 h-3.5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#f00" d="M0 0h640v480H0z" />
      <path fill="#fff" d="M160 0h320v480H160z" />
      <path
        fill="#f00"
        d="M331.6 153.2c5.4-8.8 11.2-16 17.5-22.3l-2.2 47.7 27.6-13.6c-4.4 20-3.3 26.6 4.7 34.6l32-15-13.4 35.8c6.6 5.4 20 6.6 30.7 4.7l-24.3 28.7 39.8 11.7-41.2 16.9 14.5 35.3c-15.5-2.2-24.3-8.8-33.2-17.7l-10.7 41.5-24.3-33.2-3.3 54.2h-17.7l-3.3-54.2-24.3 33.2-10.7-41.5c-8.9 8.9-17.7 15.5-33.2 17.7l14.5-35.3-41.2-16.9 39.8-11.7-24.3-28.7c10.7 1.9 24.1.7 30.7-4.7l-13.4-35.8 32 15c8-8 9.1-14.6 4.7-34.6l27.6 13.6-2.2-47.7c6.3 6.3 12.1 13.5 17.5 22.3z"
      />
    </svg>
  );
}

export function USFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#bd3d44" d="M0 0h640v480H0z" />
      <path
        stroke="#fff"
        strokeWidth="37"
        d="M0 55.5h640M0 129.5h640M0 203.5h640M0 277.5h640M0 351.5h640M0 425.5h640"
      />
      <path fill="#192f5d" d="M0 0h256v259H0z" />
    </svg>
  );
}

export function UAEFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#00732f" d="M0 0h640v160H0z" />
      <path fill="#fff" d="M0 160h640v160H0z" />
      <path fill="#000" d="M0 320h640v160H0z" />
      <path fill="#f00" d="M0 0h160v480H0z" />
    </svg>
  );
}

export function UKFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#012169" d="M0 0h640v480H0z" />
      <path stroke="#fff" strokeWidth="60" d="M0 0l640 480M640 0L0 480" />
      <path stroke="#c8102e" strokeWidth="40" d="M0 0l640 480M640 0L0 480" />
      <path stroke="#fff" strokeWidth="100" d="M320 0v480M0 240h640" />
      <path stroke="#c8102e" strokeWidth="60" d="M320 0v480M0 240h640" />
    </svg>
  );
}

export function SingaporeFlag({
  className = "w-5 h-3.5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#ed2939" d="M0 0h640v240H0z" />
      <path fill="#fff" d="M0 240h640v240H0z" />
    </svg>
  );
}

export function GermanyFlag({
  className = "w-5 h-3.5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#000" d="M0 0h640v160H0z" />
      <path fill="#d00" d="M0 160h640v160H0z" />
      <path fill="#ffce00" d="M0 320h640v160H0z" />
    </svg>
  );
}

export function BrazilFlag({
  className = "w-5 h-3.5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#009c3b" d="M0 0h640v480H0z" />
      <path fill="#ffdf00" d="M320 50L590 240 320 430 50 240z" />
      <circle cx="320" cy="240" r="100" fill="#002776" />
    </svg>
  );
}

export function MexicoFlag({
  className = "w-5 h-3.5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#006847" d="M0 0h213.3v480H0z" />
      <path fill="#fff" d="M213.3 0h213.4v480H213.3z" />
      <path fill="#ce1126" d="M426.7 0H640v480H426.7z" />
    </svg>
  );
}

export function SaudiFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#006c35" d="M0 0h640v480H0z" />
      <path fill="#fff" d="M200 240h240v15H200z" />
    </svg>
  );
}

export function QatarFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#8a1538" d="M0 0h640v480H0z" />
      <path
        fill="#fff"
        d="M0 0h160l60 26.6-60 26.7 60 26.7-60 26.7 60 26.6-60 26.7 60 26.7-60 26.6 60 26.7-60 26.7 60 26.6-60 26.7 60 26.7-60 26.7 60 26.6-60 26.7 60 26.7-60 26.6 60 26.7-60 26.7H0z"
      />
    </svg>
  );
}

export function KuwaitFlag({
  className = "w-5 h-3.5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#007a3d" d="M0 0h640v160H0z" />
      <path fill="#fff" d="M0 160h640v160H0z" />
      <path fill="#ce1126" d="M0 320h640v160H0z" />
      <path fill="#000" d="M0 0v480l160-160V160z" />
    </svg>
  );
}

export function BahrainFlag({
  className = "w-5 h-3.5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#ce1126" d="M0 0h640v480H0z" />
      <path
        fill="#fff"
        d="M0 0h160l64 48-64 48 64 48-64 48 64 48-64 48 64 48-64 48 64 48-64 48H0z"
      />
    </svg>
  );
}

export function OmanFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#fff" d="M0 0h640v160H0z" />
      <path fill="#db161b" d="M0 160h640v160H0z" />
      <path fill="#008000" d="M0 320h640v160H0z" />
      <path fill="#db161b" d="M0 0h160v480H0z" />
    </svg>
  );
}

export function MalaysiaFlag({
  className = "w-5 h-3.5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#cc0000" d="M0 0h640v480H0z" />
      <path
        stroke="#fff"
        strokeWidth="34.3"
        d="M0 34.3h640M0 102.9h640M0 171.4h640M0 240h640M0 308.6h640M0 377.1h640M0 445.7h640"
      />
      <path fill="#000066" d="M0 0h320v274.3H0z" />
      <circle cx="160" cy="137.1" r="70" fill="#fc0" />
      <circle cx="177" cy="137.1" r="60" fill="#000066" />
    </svg>
  );
}

export function IndonesiaFlag({
  className = "w-5 h-3.5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#ce1126" d="M0 0h640v240H0z" />
      <path fill="#fff" d="M0 240h640v240H0z" />
    </svg>
  );
}

export function PhilippinesFlag({
  className = "w-5 h-3.5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#0038a8" d="M0 0h640v240H0z" />
      <path fill="#ce1126" d="M0 240h640v240H0z" />
      <path fill="#fff" d="M0 0l320 240L0 480z" />
      <circle cx="106.7" cy="240" r="36" fill="#fcd116" />
    </svg>
  );
}

export function VietnamFlag({
  className = "w-5 h-3.5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#da251d" d="M0 0h640v480H0z" />
      <polygon
        fill="#ff0"
        points="320,110 357,224 476,224 380,294 417,408 320,338 223,408 260,294 164,224 283,224"
      />
    </svg>
  );
}

export function ColombiaFlag({
  className = "w-5 h-3.5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#fcd116" d="M0 0h640v240H0z" />
      <path fill="#003893" d="M0 240h640v120H0z" />
      <path fill="#ce1126" d="M0 360h640v120H0z" />
    </svg>
  );
}

export function ArgentinaFlag({
  className = "w-5 h-3.5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#74acdf" d="M0 0h640v160H0z" />
      <path fill="#fff" d="M0 160h640v160H0z" />
      <path fill="#74acdf" d="M0 320h640v160H0z" />
      <circle cx="320" cy="240" r="30" fill="#f6b40e" />
    </svg>
  );
}

export function ChileFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#fff" d="M0 0h640v240H0z" />
      <path fill="#d52b1e" d="M0 240h640v240H0z" />
      <path fill="#0039a6" d="M0 0h240v240H0z" />
    </svg>
  );
}

export function NetherlandsFlag({
  className = "w-5 h-3.5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#21468b" d="M0 320h640v160H0z" />
      <path fill="#fff" d="M0 160h640v160H0z" />
      <path fill="#ae1c28" d="M0 0h640v160H0z" />
    </svg>
  );
}

export function FranceFlag({
  className = "w-5 h-3.5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#002395" d="M0 0h213.3v480H0z" />
      <path fill="#fff" d="M213.3 0h213.4v480H213.3z" />
      <path fill="#ed2939" d="M426.7 0H640v480H426.7z" />
    </svg>
  );
}

export function SpainFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#aa151b" d="M0 0h640v120H0zM0 360h640v120H0z" />
      <path fill="#f1bf00" d="M0 120h640v240H0z" />
    </svg>
  );
}

export function ItalyFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#009246" d="M0 0h213.3v480H0z" />
      <path fill="#fff" d="M213.3 0h213.4v480H213.3z" />
      <path fill="#ce2b37" d="M426.7 0H640v480H426.7z" />
    </svg>
  );
}

export function SwitzerlandFlag({
  className = "w-5 h-3.5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#d52b1e" d="M0 0h640v480H0z" />
      <path fill="#fff" d="M260 120h120v240H260zM140 200h360v80H140z" />
    </svg>
  );
}

export function IrelandFlag({
  className = "w-5 h-3.5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#169b62" d="M0 0h213.3v480H0z" />
      <path fill="#fff" d="M213.3 0h213.4v480H213.3z" />
      <path fill="#ff883e" d="M426.7 0H640v480H426.7z" />
    </svg>
  );
}

export function SouthAfricaFlag({
  className = "w-5 h-3.5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#e03c31" d="M0 0h640v240H0z" />
      <path fill="#001489" d="M0 240h640v240H0z" />
      <path fill="#007749" d="M0 0l280 240L0 480h80l240-200v-80L80 0z" />
      <path fill="#000" d="M0 80l180 160L0 400z" />
    </svg>
  );
}

export function NigeriaFlag({
  className = "w-5 h-3.5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#008751" d="M0 0h213.3v480H0zM426.7 0H640v480H426.7z" />
      <path fill="#fff" d="M213.3 0h213.4v480H213.3z" />
    </svg>
  );
}

export function KenyaFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#000" d="M0 0h640v140H0z" />
      <path fill="#bb0000" d="M0 170h640v140H0z" />
      <path fill="#006600" d="M0 340h640v140H0z" />
      <path fill="#fff" d="M0 140h640v30H0zM0 310h640v30H0z" />
    </svg>
  );
}

export function EgyptFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#c09300" d="M0 0h640v160H0z" />
      <path fill="#fff" d="M0 160h640v160H0z" />
      <path fill="#000" d="M0 320h640v160H0z" />
    </svg>
  );
}

export function AustraliaFlag({
  className = "w-5 h-3.5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#00008b" d="M0 0h640v480H0z" />
      <path stroke="#fff" strokeWidth="40" d="M0 0l320 240M320 0L0 240" />
      <path stroke="#f00" strokeWidth="20" d="M0 0l320 240M320 0L0 240" />
      <path stroke="#fff" strokeWidth="60" d="M160 0v240M0 120h320" />
      <path stroke="#f00" strokeWidth="40" d="M160 0v240M0 120h320" />
      <circle cx="480" cy="120" r="15" fill="#fff" />
      <circle cx="440" cy="220" r="15" fill="#fff" />
      <circle cx="520" cy="200" r="15" fill="#fff" />
      <circle cx="480" cy="300" r="15" fill="#fff" />
    </svg>
  );
}

export function NewZealandFlag({
  className = "w-5 h-3.5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#00247d" d="M0 0h640v480H0z" />
      <path stroke="#fff" strokeWidth="40" d="M0 0l320 240M320 0L0 240" />
      <path stroke="#cc142b" strokeWidth="20" d="M0 0l320 240M320 0L0 240" />
      <path stroke="#fff" strokeWidth="60" d="M160 0v240M0 120h320" />
      <path stroke="#cc142b" strokeWidth="40" d="M160 0v240M0 120h320" />
    </svg>
  );
}

export function JapanFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#fff" d="M0 0h640v480H0z" />
      <circle cx="320" cy="240" r="120" fill="#bc002d" />
    </svg>
  );
}

export function SouthKoreaFlag({
  className = "w-5 h-3.5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`${className} rounded-xs shadow-2xs shrink-0 inline-block align-middle`}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#fff" d="M0 0h640v480H0z" />
      <circle cx="320" cy="240" r="100" fill="#c60c30" />
      <path
        fill="#003478"
        d="M220 240a100 100 0 0 0 200 0 50 50 0 0 1-100 0 50 50 0 0 0-100 0z"
      />
    </svg>
  );
}

export function GlobeFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={`${className} rounded-xs shrink-0 inline-block align-middle text-teal-600`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

export function getCountryFlag(countryCode: string, className = "w-5 h-3.5") {
  switch (countryCode.toUpperCase()) {
    case "IN":
      return <IndiaFlag className={className} />;
    case "CA":
      return <CanadaFlag className={className} />;
    case "US":
      return <USFlag className={className} />;
    case "AE":
      return <UAEFlag className={className} />;
    case "GB":
    case "UK":
      return <UKFlag className={className} />;
    case "SG":
      return <SingaporeFlag className={className} />;
    case "DE":
      return <GermanyFlag className={className} />;
    case "BR":
      return <BrazilFlag className={className} />;
    case "MX":
      return <MexicoFlag className={className} />;
    case "SA":
      return <SaudiFlag className={className} />;
    case "QA":
      return <QatarFlag className={className} />;
    case "KW":
      return <KuwaitFlag className={className} />;
    case "BH":
      return <BahrainFlag className={className} />;
    case "OM":
      return <OmanFlag className={className} />;
    case "MY":
      return <MalaysiaFlag className={className} />;
    case "ID":
      return <IndonesiaFlag className={className} />;
    case "PH":
      return <PhilippinesFlag className={className} />;
    case "VN":
      return <VietnamFlag className={className} />;
    case "CO":
      return <ColombiaFlag className={className} />;
    case "AR":
      return <ArgentinaFlag className={className} />;
    case "CL":
      return <ChileFlag className={className} />;
    case "NL":
      return <NetherlandsFlag className={className} />;
    case "FR":
      return <FranceFlag className={className} />;
    case "ES":
      return <SpainFlag className={className} />;
    case "IT":
      return <ItalyFlag className={className} />;
    case "CH":
      return <SwitzerlandFlag className={className} />;
    case "IE":
      return <IrelandFlag className={className} />;
    case "ZA":
      return <SouthAfricaFlag className={className} />;
    case "NG":
      return <NigeriaFlag className={className} />;
    case "KE":
      return <KenyaFlag className={className} />;
    case "EG":
      return <EgyptFlag className={className} />;
    case "AU":
      return <AustraliaFlag className={className} />;
    case "NZ":
      return <NewZealandFlag className={className} />;
    case "JP":
      return <JapanFlag className={className} />;
    case "KR":
      return <SouthKoreaFlag className={className} />;
    default:
      return <GlobeFlag className={className} />;
  }
}
