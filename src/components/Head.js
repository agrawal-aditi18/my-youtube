import searchLogo from "../search-logo.png"

const Head = () => {
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg ">
        <div className="flex col-span-1">
            <img 
            className='h-7'
            alt = "menu"
            src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr9B9snrsfNCLmPN8SK8WARBp_ENIItDvXcg&s" />
            <img 
            className='h-7 mx-3'
            alt = "you-tube logo"
            src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"/>
        </div>
        <div className='col-span-1 flex'>
            <input className='w-5/6 rounded-l-full border border-gray-400 p-2'  type ="text" placeholder ="Search"/>
            <button className='rounded-r-full border border-gray-400 px-2 py-1 bg-gray-100'>
                <img 
                className='h-8'
                alt="search-logo"
                src={searchLogo}/>
                </button>
        </div>
        <div className='col-span-1 flex justify-end mx-5'>
            <img className='h-8' 
            alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
            
        </div>
    </div>
  )
}

export default Head