import { useEffect, useState } from "react";
import "./style.css"
import axios from "axios";
type Noticias = {
    id: number;
    titulo: string; 
    subtitulo: string;
    imagemAddress: string;
    texto: string;
    data: Date;
  };

export default function DeleteNoticias(){
    const [edicoes, setEdicoes] = useState<Noticias[]>([]);
    const [id,setId] = useState(Number)
    useEffect(() => {
        const carregarNoticias = async () => {
          try {
            const response = await axios.get<Noticias[]>('http://localhost:8080/noticias');
            setEdicoes(response.data);
          } catch (error) {
            console.error('Erro ao carregar notícias:', error);
          }
        };
    
        carregarNoticias();
      }, []);

      const capturaId = async (id: number) => {
            try{
                await axios.delete(`http://localhost:8080/noticias/${id}`);
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