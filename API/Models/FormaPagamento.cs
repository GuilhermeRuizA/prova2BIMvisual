using System;

namespace API.Models
{
    public class FormaPagamento
    {

        public FormaPagamento() => CriadoEm = DateTime.Now;

        public int FormaPagamentoId { get; set; }
        public string NomeFormaPagamento { get; set; }
        public string DescricaoFormaPagamento { get; set; }
        public DateTime CriadoEm { get; set; }
    }
}