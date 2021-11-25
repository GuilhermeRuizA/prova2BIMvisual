using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/inicializar")]
    public class InicializarDadosController : ControllerBase
    {
        private readonly DataContext _context;
        public InicializarDadosController(DataContext context)
         {
             _context = context;
         }

        //POST: api/inicializar/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create()
        {
            _context.Categorias.AddRange(new Categoria[]
                {
                    new Categoria { CategoriaId = 1, Nome = "Bebida" },
                }
            );
            _context.Produtos.AddRange(new Produto[]
                {
                    new Produto { ProdutoId = 1, Nome = "Coca-Cola", Preco = 8.80, Quantidade = 10, CategoriaId = 1 },
                    new Produto { ProdutoId = 2, Nome = "Fanta Laranja", Preco = 7.10, Quantidade = 10, CategoriaId = 1 },
                    new Produto { ProdutoId = 3, Nome = "Suco Del Valle", Preco = 6.60, Quantidade = 8, CategoriaId = 1 },
                }
            );
            _context.SaveChanges();
            return Ok(new { message = "Dados inicializados com sucesso!" });
        }
    }
}