import Image from 'next/image'

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        alt={name}
        // width={500}
        // height={500}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
