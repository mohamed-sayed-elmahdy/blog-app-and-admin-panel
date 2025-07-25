import Link from "next/link"

function ButtonLink({ href, children, className = "" }) {
  return (
      <Link href={href} className={` ${className}`}>
        {children}
      </Link>
    
  )
}


export default ButtonLink