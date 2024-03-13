import { useEffect, useState } from "react";
import "./style.css"
import axios from "axios";
type Edicoes = {
    id: number;
    titulo: string;
    imagemAddress: string;
    pdfAdress: string;
  };

export default function DeleteEdicoes(){
    const [edicoes, setEdicoes] = useState<Edicoes[]>([]);
    const [id,setId] = useState(Number)
    useEffect(() => {
        const carregarNoticias = async () => {
          try {
            const response = await axios.get<Edicoes[]>('http://localhost:8080/edicoes');
            setEdicoes(response.data);
          } catch (error) {
            console.error('Erro ao carregar notícias:', error);
          }
        };
    
        carregarNoticias();
      }, []);

      const capturaId = async (id: number) => {
            try{
                await axios.delete(`http://localhost:8080/edicoes/${id}`);
                setEdicoes(edicoes.filter((edicao) => edicao.id !== id));
                console.log("Edição excluída com sucesso");
            }catch(error){
                console.error("Erro ao excluir edição:", error);
            }
      }
    return(
        <div className="Capsula">
            {edicoes.map((objeto) =>
                <div>
                    <h3>{objeto.titulo}</h3>
                    <button onClick={() => capturaId(objeto.id)}>Deletar Edição</button>
                </div>
            )}
        </div>
    )
}