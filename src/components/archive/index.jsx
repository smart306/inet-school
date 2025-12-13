"use client"

import Image from "next/image";

export default function Archive({archive}){
    return (
      <div className="h-screen pt-[30%] sm:pt-[20%] md:pt-[15%] lg:pt-[10%]">
        <div className="my-container">
          {archive.map((item, i) => (
            <div key={i}>
              <h2>{item?.sections?.title}</h2>
              <div>
                <h1>{item.archive_files?.file?.asset?.url}</h1>
                <h4>{item.archive_files?.author?.full_name}</h4>
                <Image src={item.archive_files?.author?.image?.asset?.url} width={24} height={24} alt="p"/>
                <p>{item.archive_files?.author?.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}