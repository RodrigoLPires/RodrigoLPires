import mysql.connector

con = mysql.connector.connect(host='localhost', database='', user='root', password='MinhaSenhaSecret@$')

class Conector():

    def conector(banco_dados):
        con.connect(database=banco_dados)
        if con.is_connected():
            db_info_server = con.get_server_info()
            db_info_datase = con.cursor()
            db_info_datase.execute('select database()')
            info_datase = str(db_info_datase.fetchone())
            print("Conexão efetivada com sucesso!!! Versão " + db_info_server)
            print("Banco conectado: " + info_datase)

class Desconector():

    def desconector(banco_dados):
        if con.is_connected():
            con.close
            print("Conexão desconectada com sucesso!!!")


class Conectar:

    def conexao_on(banco):
        Conector.conector(banco)


    def conexao_off(banco):
        Desconector.desconector(banco)


class CursorConsulta:

    def atributoCursor(self):
        cursor = con.cursor()
        cursor.execute(self)
        return cursor.fetchall()


class CursorInserir:

    def atributoCursor(self):
        cursor = con.cursor()
        cursor.execute(self)
        con.commit()
