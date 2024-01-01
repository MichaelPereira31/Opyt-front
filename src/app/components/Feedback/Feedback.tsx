import Image from "next/image"
import Star from "../Star";

type IFeedBack = {
  note: number
  name: string
  url: string
  text: string
}
export default function Feedback({note, name, url, text}:IFeedBack) {
  const items: number[] = [0,1,2,3,4]

  return (
    <div className="flex flex-col w-[60%] border-solid border-4 rounded-md p-3 mx-3 lg:w-[250px] lg:h-[400px] mb-3">
      <div className="flex items-center my-3 lg:h-[112px]">
        <div className="">
          <Image
            src={url}
            alt="Usuario picture"
            width={350}
            height={300}
          />
        </div>
        <div className="w-[50%]">
          <div className="flex">
            {items.map(index => (<Star isActive={index < note} key={index}/>))}
          </div>
          <div className="text-xl">
            <p>{name}</p>
          </div>
        </div>
      </div>
      <div className="">
        <p>
        {text}
        </p>
      </div>
    </div>
  );
}