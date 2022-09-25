import React from 'react'

const Loading = () => {
    return (
      <div className="w-full flex justify-center items-center">
        <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-[#009FFF] via-[#EC2F4B] via-[#FC00FF] to-[#00DBDE]">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-bgPrimaryCol rounded-full"></div>
        </div>
      </div>
    );
}

export default Loading