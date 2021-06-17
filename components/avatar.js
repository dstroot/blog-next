import Image from 'next/image'

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        alt={name}
        width={55}
        height={55}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div className="ml-4 text-xl font-bold">{name}</div>
    </div>
  )
}
