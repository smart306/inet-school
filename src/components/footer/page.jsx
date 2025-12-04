"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-nav relative rounded-t-4xl w-full">
      <div className="absolute inset-0">
        <Image
          src="/Rectangle13ph.png"
          fill
          alt="b"
          className="object-cover w-full h-auto opacity-10"
        />
      </div>
      <div className="relative z-10 my-container pt-8 lg:pt-16 pb-4 space-y-6 lg:space-y-16">
        <div className="lg:max-w-lg">
          <h2>Ільницький спортивно-гуманітарний ліцей</h2>
        </div>
        <div className="space-y-8 lg:flex lg:flex-row lg:space-x-28 lg:justify-between">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-row justify-right space-x-4 items-center">
              <Image src="/phone.svg" width={24} height={24} alt="p" />
              <p className="text-[16px]! text-white!">(03144)79-8-91</p>
            </div>

            <div className="flex flex-row justify-right space-x-4 items-center">
              <Image src="/mail.svg" width={24} height={24} alt="p" />
              <p className="text-[16px]! text-white!">ilnlicej@ukr.net</p>
            </div>

            <div className="flex flex-row justify-right space-x-4 items-center">
              <Image src="/map_point.svg" width={24} height={24} alt="p" />
              <p className="text-[16px]! text-white! max-w-sm">
                с. Ільниця, Хустський р-н, Закарпатська обл., вул. Шахтарська,
                14
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4 lg:grid-cols-3">
            <Link href="#" className="h2 text-white font-[700] leading-[1.3]">
              Адміністрація
            </Link>
            <Link href="#" className="h2 text-white font-[700] leading-[1.3]">
              Учительська
            </Link>
            <Link href="#" className="h2 text-white font-[700] leading-[1.3]">
              Класи
            </Link>
            <Link href="#" className="h2 text-white font-[700] leading-[1.3]">
              Галерея
            </Link>
            <Link href="#" className="h2 text-white font-[700] leading-[1.3]">
              Новини
            </Link>
            <Link href="#" className="h2 text-white font-[700] leading-[1.3]">
              Архів
            </Link>
            <Link href="#" className="h2 text-white font-[700] leading-[1.3]">
              Зворотній зв'язок
            </Link>
            <Link href="#" className="h2 text-white font-[700] leading-[1.3]">
              Інформація про заклад
            </Link>
          </div>
        </div>
        <div className="mt-4 flex flex-col items-center">
          <h5 className="text-[16px] text-white">Всі права захищені ©2024</h5>
          <h5 className="text-[16px] text-white underline">
            Power by Cyber Spells
          </h5>
        </div>
      </div>
    </div>
  );
}
