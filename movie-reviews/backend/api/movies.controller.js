import MoviesDao from '../dao/moviesDAO.js'

export default class MoviesController{

    static async apiGetMovies(req,res,next){ 
        const moviesPerPage = req.query.moviesPerPage ?
      parseInt(req.query.moviesPerPage) : 20 
        const page = req.query.page ? parseInt(req.query.page) : 0  
        
        let filters = {}
        if(req.query.rated){
        filters.rated = req.query.title
    }
    const {moviesList, totalNumMovies } = await 
    MoviesDao.getMovies({filters, page, moviesPerPage})

      let response ={
                     movies: moviesList,
                      page : page, 
                      filters: filters,
                      entries_per_page : moviesPerPage, 
                      total_results: totalNumMovies,
      }

    res.json(response)
  }
}