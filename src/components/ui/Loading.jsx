const Loading = ({ size = 'medium' }) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-10 h-10'
  }

  return (
    <div className="flex items-center justify-center">
      <div className={`${sizeClasses[size]} animate-spin rounded-full border-[4px] border-gray-200 border-t-black`}>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Loading;