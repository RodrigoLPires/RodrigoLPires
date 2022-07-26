from Data_Base_Connect import Conectar as dbc
from Data_Base_Connect import CursorConsulta
import Data_Base_Tabelas as tb

banco_conexao = 'dados_consumo'

dbc.conexao_on(banco_conexao)

busca = f"Select {tb.tabela_produtos}.produto, {tb.tabela_produtos}.tipo, {tb.tabela_categoria}.categoria from {tb.tabela_produtos} \n" \
        f" inner join {tb.tabela_categoria} on {tb.tabela_produtos}.categoria = {tb.tabela_categoria}.id"

consulta = CursorConsulta.atributoCursor(busca)

print(consulta)

dbc.conexao_off(banco_conexao)
