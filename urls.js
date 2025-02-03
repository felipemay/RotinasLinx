const urlsConfig = [
        {
            caminho: "Faturamento > Nota Fiscal > Faturar Pedido",
            urlPattern: "faturamento/cadastro_nota_fiscal.asp?sub_rotina=faturar_pedido",
            manual: ""
        },
        {
            caminho: "Empresa > Dados da Empresa",
            urlPattern: "gestor_web/dados_empresa.asp",
            manual: "https://share.linx.com.br/display/SHOPLINXMICRPUB/Dados+da+Empresa"
        },
        {
            caminho: "Empresa > Gerenciar Visões",
            urlPattern: "visao/gestao_visoes.asp",
            manual: "https://share.linx.com.br/pages/viewpage.action?pageId=168830053"
        },
        { //ampliar os parametros globais posteriormente para emglobar todos
            caminho: "Empresa > Parâmetros Globais",
            urlPattern: "parametros/indice_param_globais.asp",
            manual: "https://share.linx.com.br/pages/viewpage.action?pageId=168829596"
        },
        {
            caminho: "Empresa > Segurança > Configurar acessos",
            urlPattern: "/config_acessos.asp",
            manual: ""
        },
        {
            caminho: "Empresa > Segurança > Configurar usuários",
            urlPattern: "usuarios/index_usuarios.asp",
            manual: "https://share.linx.com.br/pages/viewpage.action?pageId=168829538"
        },
        {
            caminho: "Empresa > Segurança > Pesquisar Logs",
            urlPattern: "logs/pesquisar_logs.asp",
            manual: "https://share.linx.com.br/display/SHOPLINXMICRPUB/Pesquisar+Logs"
        },
        {
            caminho: "Empresa > Segurança > Enviar Logs do POS para Suporte Microvix",
            urlPattern: "pos/enviar_logs_pos.asp",
            manual: ""
        },
        {
            caminho: "Empresa > Segurança > Relatório de Solicitações de Recuperação de Senha",
            urlPattern: "usuarios/relatorio_solicitacao_recuperacao_senha.asp",
            manual: ""
        },
        {
            caminho: "Empresa > Segurança > Gráficos de Sincronização",
            urlPattern: "graficos/sinc/index.asp",
            manual: ""
        },
        {
            caminho: "Empresa > Segurança > Relatório de Permissão de usuário",
            urlPattern: "usuarios/relatorio_permissoes/filtros.asp",
            manual: ""
        },
        {
            caminho: "Empresa > Multimarca > Aprovação Multimarcas",
            urlPattern: "empresa/multimarca/#/aprovacao-multimarcas",
            manual: ""
        },
        {
            caminho: "Empresa > Multimarca > Grupos de Produtos Multimarca",
            urlPattern: "empresa/multimarca/#/grupos-produtos-multimarca",
            manual: ""
        },
        {
            caminho: "CRM > Cadastros Auxiliares > Classes",
            urlPattern: "clientes/cad_auxiliares/classe_cadastro.asp",
            manual: "https://share.linx.com.br/display/SHOPLINXMICRPUB/Classes"
        },
        {
            caminho: "CRM > Cadastros Auxiliares > Classe Fiscal",
            urlPattern: "clientes/cad_auxiliares/classe_fiscais.asp",
            manual: "https://share.linx.com.br/display/SHOPLINXMICRPUB/Classe+Fiscal"
        },
        {
            caminho: "CRM > Cadastros Auxiliares > Classe Fiscal - Regras",
            urlPattern: "clientes/cad_auxiliares/classe_fiscais_regras.asp",
            manual: "https://share.linx.com.br/display/SHOPLINXMICRPUB/Classe+Fiscal+-+Regras"
        },
        {
            caminho: "CRM > Cadastros Auxiliares > Campos Adicionais",
            urlPattern: "clientes/campos_adicionais_cadastro.asp",
            manual: "https://share.linx.com.br/display/SHOPLINXMICRPUB/Cadastro+de+Campos+Adicionais"
        },
        {
            caminho: "CRM > Cadastros Auxiliares > Grupos Empresariais",
            urlPattern: "clientes/cad_auxiliares/cadastro_grupo_clientes.asp",
            manual: "https://share.linx.com.br/display/SHOPLINXMICRPUB/Grupos+Empresariais"
        },
        {
            caminho: "CRM > Cadastros Auxiliares > Motivos de Bloqueio",
            urlPattern: "clientes/cad_auxiliares/motivo_bloqueio_cadastro.asp",
            manual: "https://share.linx.com.br/display/SHOPLINXMICRPUB/Motivos+de+Bloqueio"
        },
        {
            caminho: "CRM > Cadastros Auxiliares > Descontos Sugeridos",
            urlPattern: "clientes/cad_auxiliares/descontos_sugeridos_form.asp",
            manual: "https://share.linx.com.br/display/SHOPLINXMICRPUB/Descontos+Sugeridos"
        },
        {
            caminho: "CRM > Cadastros Auxiliares > Funcionários",
            urlPattern: "servicos/cad_auxiliares/cadastro_funcionarios.asp",
            manual: "https://share.linx.com.br/pages/viewpage.action?pageId=168829453"
        },
        {
            caminho: "CRM > Cadastros Auxiliares > Tipos de Registro Profissional",
            urlPattern: "gestor_web/crm/cadastro_auxiliar/tipo_registro_profissional/index.html",
            manual: "https://share.linx.com.br/display/SHOPLINXMICRPUB/Cadastro+de+Tipo+de+Registro+Profissional+-+CRM"
        },
        {
            caminho: "CRM > Cadastro de Clientes e Fornecedores",
            urlPattern: "clientes/cadastro_de_cliente_dados.asp",
            manual: "https://share.linx.com.br/pages/viewpage.action?pageId=168829026"
        },
        {
            caminho: "CRM > Importação De Clientes (Novo)",
            urlPattern: "crm/webapp/clientes/importacao",
            manual: "https://share.linx.com.br/pages/viewpage.action?pageId=213824735"
        },
        {
            caminho: "CRM > Clientes/Fornecedores",
            urlPattern: "crm/webapp/clientes/listagem",
            manual: "https://share.linx.com.br/pages/viewpage.action?pageId=225938106"
        },
        {
            caminho: "CRM > Pesquisa",
            urlPattern: "clientes/pesquisa_de_clientes.asp",
            manual: "https://share.linx.com.br/pages/viewpage.action?pageId=168829411"
        },
        {
            caminho: "CRM > Crédito > Bloqueio de Crédito",
            urlPattern: "clientes/relat_bloqueio.asp",
            manual: "https://share.linx.com.br/pages/viewpage.action?pageId=168829379"
        },
        {
            caminho: "CRM > Crédito > Bloqueio de CPF - Chq.Terc.",
            urlPattern: "clientes/cadastro_cpf_titular_chq_terceiro_mod.asp",
            manual: "https://share.linx.com.br/pages/viewpage.action?pageId=168829365"
        },
        {
            caminho: "CRM > Relatórios > Relatório Cliente/Fornecedor",
            urlPattern: "clientes/relatorio_de_clientes.asp",
            manual: "https://share.linx.com.br/pages/viewpage.action?pageId=168829324"
        },
        {
            caminho: "CRM > Relatórios > Últimas Compras/Vendas",
            urlPattern: "clientes/ultima_compra.asp",
            manual: "https://share.linx.com.br/pages/viewpage.action?pageId=168829311"
        },
        {
            caminho: "CRM > Relatórios > Manutenção",
            urlPattern: "clientes/relat_manutencao.asp",
            manual: "https://share.linx.com.br/pages/viewpage.action?pageId=168829298"
        },
        {
            caminho: "CRM > Relatórios > Perfil de Clientes por Gênero e Faixa Etária",
            urlPattern: "crm/relatorios/genero_e_faixa_etaria/index.html",
            manual: "https://share.linx.com.br/pages/viewpage.action?pageId=252603387"
        },
        {
            caminho: "CRM > Relatórios > Etiquetas > Configuração de etiquetas",
            urlPattern: "produtos/etiquetas/cadastra_modelo.asp?alterar=nao&tipo=C",
            manual: "https://share.linx.com.br/pages/viewpage.action?pageId=168829290"
        },
        {
            caminho: "CRM > Relatórios > Etiquetas > Impressão de etiquetas",
            urlPattern: "produtos/etiquetas/configura_impressao.asp?rotina=C",
            manual: "https://share.linx.com.br/pages/viewpage.action?pageId=168829268"
        },
        {
            caminho: "Adm. / Financeiro > Cadastros Auxiliares  > Contas a Receber > Portadores",
            urlPattern: "financeiro/portadores/cadastro_de_portadores.asp",
            manual: "https://share.linx.com.br/display/SHOPLINXMICRPUB/Portadores"
        },
        {
            caminho: "Adm. / Financeiro > Cadastros Auxiliares  > Contas a Receber > Status",
            urlPattern: "financeiro/cadastro_status_faturas.asp",
            manual: "https://share.linx.com.br/display/SHOPLINXMICRPUB/Status+-++Contas+a+Receber"
        },
        {
            caminho: "Adm. / Financeiro > Cadastros Auxiliares  > Contas a Receber > Assessorias",
            urlPattern: "/cobranca/cadastro_assessorias.asp",
            manual: "https://share.linx.com.br/display/SHOPLINXMICRPUB/Assessorias"
        },
        {
            caminho: "Adm. / Financeiro > Cadastros Auxiliares  > Contas a Receber > Formulários de Documentos",
            urlPattern: "financeiro/formularios_documentos.asp?tipolanc=receber",
            manual: "https://share.linx.com.br/pages/viewpage.action?pageId=168828822"
        },
        {
            caminho: "Adm. / Financeiro > Cadastros Auxiliares  > Contas a Pagar > Formulários de Documentos",
            urlPattern: "financeiro/formularios_documentos.asp?tipolanc=pagar",
            manual: "https://share.linx.com.br/pages/viewpage.action?pageId=168828808"
        },
        {
            caminho: "Adm. / Financeiro > Cadastros Auxiliares  > Contabilidade > Operações Padrões",
            urlPattern: "financeiro/contabilidade/operacoes_contab.asp",
            manual: "https://share.linx.com.br/pages/viewpage.action?pageId=168828778"
        },
        {
            caminho: "Adm. / Financeiro > Cadastros Auxiliares  > Contabilidade > Plano de Contas",
            urlPattern: "financeiro/contabilidade/plano_contas/listagem_plano_contas.html",
            manual: "https://share.linx.com.br/display/SHOPLINXMICRPUB/Plano+de+Contas"
        },
        {
            caminho: "Cadastros > Contábil > Históricos",
            urlPattern: "financeiro/contabilidade/cadastro_contab_historicos.asp",
            manual: "https://share.linx.com.br/pages/viewpage.action?pageId=168828707"
        },
        {
            caminho: "Adm. / Financeiro > Cadastros Auxiliares  > Contabilidade > Históricos",
            urlPattern: "financeiro/contabilidade/cadastro_contab_historicos.asp",
            manual: "https://share.linx.com.br/pages/viewpage.action?pageId=168828707"
        },
        {
            caminho: "Adm. / Financeiro > Cadastros Auxiliares  > Contabilidade > Centros de custo",
            urlPattern: "financeiro/contabilidade/cad_auxiliares/cadastro_centrocusto.asp",
            manual: "https://share.linx.com.br/display/SHOPLINXMICRPUB/Centros+de+Custo"
        },
        {
            caminho: "Adm. / Financeiro > Cadastros Auxiliares  > Contabilidade > Fluxo de Caixa Gerencial",
            urlPattern: "financeiro/contabilidade/cad_auxiliares/fluxo_caixa_gerencial/index.asp",
            manual: "https://share.linx.com.br/display/SHOPLINXMICRPUB/Fluxo+de+Caixa+Gerencial"
        },
        {
            caminho: "Adm. / Financeiro > Cadastros Auxiliares  > Ativo Fixo > Locais",
            urlPattern: "controle_patrimonial/locais_cadastro.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Cadastros Auxiliares  > Ativo Fixo > Categorias",
            urlPattern: "controle_patrimonial/categorias_cadastro.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Cadastros Auxiliares  > Ativo Fixo > Operações",
            urlPattern: "controle_patrimonial/operacoes_cadastro.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Cadastros Auxiliares  > Ativo Fixo > Ativos",
            urlPattern: "controle_patrimonial/bens_cadastro.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Cadastros Auxiliares  > Ativo Fixo > Documentos",
            urlPattern: "controle_patrimonial/documentos/cad_documento.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Cadastros Auxiliares  > Categorias Financeiras",
            urlPattern: "financeiro/categorias_financeiras/categorias_financeiras.html",
            manual: "https://share.linx.com.br/display/SHOPLINXMICRPUB/Categorias+Financeiras"
        },
        {
            caminho: "Adm. / Financeiro > Gestão Financeira (Novo)",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=/gestao-financeira/calendario&appPermissao=gestao_financeira_permissao",
            manual: "https://share.linx.com.br/pages/viewpage.action?pageId=441532675"
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Lançamento de Faturas",
            urlPattern: "financeiro/lancamento_receber_pagar.asp?tipolanc=receber",
            manual: "https://share.linx.com.br/pages/viewpage.action?pageId=478727189"
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Lançamento de Faturas via CMC7",
            urlPattern: "financeiro/lancamento_receber_via_cmc7.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Alteração/Exclusão de Faturas",
            urlPattern: "financeiro/altera_faturas.asp?tipolanc=receber",
            manual: "https://share.linx.com.br/display/SHOPLINXMICRPUB/Alterar+Faturas+-+A+Receber"
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Alteração de Portador/Status em Lote",
            urlPattern: "financeiro/altera_status_lote.asp?tipolanc=receber",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Atribuir Carteira de Cobrança em Lote",
            urlPattern: "financeiro/atribuir_carteira_de_cobranca_lote/index.html?tipo=1",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Baixa de Faturas",
            urlPattern: "financeiro/baixa_faturas.asp?tipolanc=receber",
            manual: "https://share.linx.com.br/display/SHOPLINXMICRPUB/Baixar+Faturas+-+A+Receber"
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Baixa de Faturas via CMC7",
            urlPattern: "financeiro/baixa_faturas_cmc7.asp?tipolanc=receber",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Boletos Conta Digital (Novo)",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=openbanking/boletos&appPermissao=open_banking_permissao_boletos",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Estorno de Faturas",
            urlPattern: "financeiro/extorno_faturas.asp?tipolanc=receber",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Importação de Faturas (Novo)",
            urlPattern: "financeiro/importacao_de_faturas_novo/index.html#/importacao-faturas/1",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Importação de Faturas",
            urlPattern: "financeiro/importacao_de_faturas/importacao_de_faturas.asp?tipo=2",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Notificações Automáticas (Novo)",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=notificacoes/home&appPermissao=notificacao_permissao",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Cobrança Eletrônica > Configurar",
            urlPattern: "gestor_web/financeiro/cnab_400/cadastro/cobranca_bancaria.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Cobrança Eletrônica > Gerar Arquivo de Remessa",
            urlPattern: "financeiro/cnab_400/remessa_cnab_400.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Cobrança Eletrônica > Processar Arquivo de Retorno",
            urlPattern: "financeiro/cnab_400/retorno/retorno_cnab_400.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Cobrança Eletrônica > Relatórios > Relatório de Faturas",
            urlPattern: "financeiro/cnab_400/relatorios/relatorio_faturas.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Cobrança Eletrônica > Relatórios > Relatório de Lotes",
            urlPattern: "financeiro/cnab_400/relatorios/relatorio_lotes.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Cheques em Custódia > Gerar Arquivo de Remessa",
            urlPattern: "financeiro/cnab_240/remessa_cnab_240.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Cheques em Custódia > Processar Arquivo de Retorno",
            urlPattern: "financeiro/cnab_240/retorno_cnab_240.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Desconto de Faturas > Desconto",
            urlPattern: "financeiro/desconto_faturas.asp?tipolanc=receber",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Desconto de Faturas > Baixa/Estorno",
            urlPattern: "financeiro/baixa_desconto_faturas.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Agrupamento de Faturas > Agrupar Faturas",
            urlPattern: "financeiro/agrupamento_fatura.asp?tipolanc=receber",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Agrupamento de Faturas > Listagem Faturas Agrupadas",
            urlPattern: "financeiro/relatorio_fat_agrup.asp?tipolanc=receber",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Relatórios > Extrato de Clientes",
            urlPattern: "financeiro/relatorio_extrato.asp?tipolanc=receber",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Relatórios > Análise de crédito",
            urlPattern: "financeiro/relatorio_analise_credito.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Relatórios > Faturas a Receber",
            urlPattern: "financeiro/relatorio_faturas_periodo.asp?tipolanc=receber&filtro_adm_cartao=S&lancamento=S",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Relatórios > Faturas Recebidas",
            urlPattern: "financeiro/relatorio_faturas_periodo_recebidas.asp?tipolanc=receber&filtro_adm_cartao=S&lancamento=S",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Relatórios > Faturas Lançadas",
            urlPattern: "financeiro/relatorio_faturas_lancadas.asp?tipolanc=receber&filtro_adm_cartao=S",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Relatórios > Aviso de Vencimento",
            urlPattern: "financeiro/relatorio_aviso_venc.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Relatórios > Previsão de Fluxo Caixa",
            urlPattern: "financeiro/tesouraria/relatorio_fluxo_caixa.asp?tipolanc=receber",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Relatórios > Faturas Excluídas",
            urlPattern: "financeiro/relatorio_faturas_excluidas.asp?tipolanc=receber&filtro_adm_cartao=S",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Relatórios > Resumo a Receber",
            urlPattern: "financeiro/relatorio_resumo_receber.asp?tipolanc=receber",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Relatórios > Status por período",
            urlPattern: "financeiro/relatorio_status.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Relatórios > Carta de Anuência",
            urlPattern: "financeiro/carta_anuencia_relatorio.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Relatórios > Inadimplência Anual",
            urlPattern: "financeiro/relatorio_inadimplencia_anual.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Relatórios > Impressão Carnê Lote",
            urlPattern: "financeiro/impressao_carne_lote.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Relatórios > Cheques de Terceiros",
            urlPattern: "financeiro/relat_cheque_terceiro.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Relatórios > Relatório para Cobrança",
            urlPattern: "financeiro/relatorio_cobranca.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Relatórios > Histórico de Cheques",
            urlPattern: "financeiro/historico_cheques.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Relatórios > Impressão Formulário",
            urlPattern: "financeiro/impressao_formulario.asp?tipolanc=receber",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Relatórios > Faturas do Contas a Receber",
            urlPattern: "financeiro/relatorio_faturas.asp?tipolanc=receber&filtro_adm_cartao=S",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Receber > Relatórios > Contas a Receber por Plano de Pagamento",
            urlPattern: "financeiro/relatorios/plano_pagamento/index.html",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Pagar > Lançamento de Faturas",
            urlPattern: "financeiro/lancamento_receber_pagar.asp?mais_contas_debitos=S",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Pagar > Alteração / Exclusão Faturas",
            urlPattern: "financeiro/altera_faturas.asp?mais_contas_debitos=S",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Pagar > Alteração de Portador/Status em Lote",
            urlPattern: "financeiro/altera_status_lote.asp?tipolanc=pagar",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Pagar > Atribuir Carteira de Cobrança em Lote",
            urlPattern: "financeiro/atribuir_carteira_de_cobranca_lote/index.html?tipo=2",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Pagar > Baixa de Faturas",
            urlPattern: "financeiro/baixa_faturas.asp?ParametroParaFavoritos=pagar",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Pagar > Estorno de Faturas",
            urlPattern: "financeiro/extorno_faturas.asp?tipo_lanc=pagar",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Pagar > Importação de Faturas (Novo)",
            urlPattern: "financeiro/importacao_de_faturas_novo/index.html#/importacao-faturas/2",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Pagar > Importação de Faturas",
            urlPattern: "financeiro/importacao_de_faturas/importacao_de_faturas.asp?tipo=1",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Pagar > Agrupamento de Faturas > Agrupar Faturas",
            urlPattern: "financeiro/agrupamento_fatura.asp?tipolanc=pagar",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Pagar > Agrupamento de Faturas > Listagem Faturas Agrupadas",
            urlPattern: "financeiro/relatorio_fat_agrup.asp?tipolanc=pagar",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Pagar > Pagamento Escritural > Configurar",
            urlPattern: "financeiro/cnab_400/cadastro/cobranca_bancaria.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Pagar > Pagamento Escritural > Gerar Arquivo Remessa",
            urlPattern: "financeiro/cnab_240/remessa_pagamentos_cnab240.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Pagar > Pagamento Escritural > Processar Arquivo de Retorno",
            urlPattern: "financeiro/cnab_240/retorno_pagamentos_cnab240.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Pagar > Integração Arredondar",
            urlPattern: "financeiro/relat_integracao_arredondar.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Pagar > Relatórios > Extrato de Fornecedor",
            urlPattern: "financeiro/relatorio_extrato.asp?ParametroParaFavoritos=pagar",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Pagar > Relatórios > Faturas a Pagar",
            urlPattern: "financeiro/relatorio_faturas_periodo.asp?ParametroParaFavoritos=pagar",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Pagar > Relatórios > Faturas Pagas",
            urlPattern: "financeiro/relatorio_faturas_periodo_recebidas.asp?ParametroParaFavoritos=pagar",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Pagar > Relatórios > Faturas Lançadas",
            urlPattern: "financeiro/relatorio_faturas_lancadas.asp?ParametroParaFavoritos=pagar",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Pagar > Relatórios > Faturas Excluídas",
            urlPattern: "financeiro/relatorio_faturas_excluidas.asp?ParametroParaFavoritos=pagar",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Pagar > Relatórios > Resumo a Pagar",
            urlPattern: "financeiro/relatorio_resumo_receber.asp?ParametroParaFavoritos=pagar",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Pagar > Relatórios > Previsão de Fluxo Caixa",
            urlPattern: "financeiro/tesouraria/relatorio_fluxo_caixa.asp?ParametroParaFavoritos=pagar",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Pagar > Relatórios > Faturas do Contas a Pagar",
            urlPattern: "financeiro/relatorio_faturas.asp?tipolanc=pagar",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Pagar > Relatórios > Impressão Formulário",
            urlPattern: "financeiro/impressao_formulario.asp?tipolanc=pagar",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contas a Pagar > Relatórios > Contas a Pagar por Fornecedor",
            urlPattern: "financeiro/relatorios/contas_pagar_fornecedor/index.html",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Tesouraria > Lançamento reduzido",
            urlPattern: "financeiro/tesouraria/lancamento_reduzido.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Tesouraria > Conciliador Bancário",
            urlPattern: "financeiro/tesouraria/conciliador_bancario/selecao_contas/index.html",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Tesouraria > Transferência entre Contas",
            urlPattern: "financeiro/tesouraria/transferencias_entre_contas/transferencia_entre_contas.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Tesouraria > Previsão de despesas > Cadastro de Previsão de despesas",
            urlPattern: "financeiro/previsoes/previsoes_cadastro.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Tesouraria > Previsão de despesas > Efetivação de Previsão de despesas",
            urlPattern: "financeiro/previsoes/previsoes_cadastro_efetivar.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Tesouraria > Relatórios > Conta corrente",
            urlPattern: "financeiro/tesouraria/relatorio_conta_corrente.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Tesouraria > Relatórios > Previsão de fluxo de caixa",
            urlPattern: "financeiro/tesouraria/relatorio_fluxo_caixa.asp?tipolanc=tesouraria",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Tesouraria > Relatórios > Fluxo de Caixa",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=/gestao-financeira/fluxo-caixa&appPermissao=gestao_financeira_permissao",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Tesouraria > Relatórios > DRO - Demonstrativo de Resultados Operacional",
            urlPattern: "financeiro/relatorios/dro/index.html",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Tesouraria > Relatórios > Resultado por Centro de Custo (Regime Caixa)",
            urlPattern: "financeiro/tesouraria/relatorio_resultado_cc_filtro.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Tesouraria > Relatórios > Entradas e Saídas por Categorias Financeiras",
            urlPattern: "financeiro/categorias_financeiras/relatorio/index.html",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Tesouraria > Relatórios > Programação de Recebimento X Pagamento",
            urlPattern: "financeiro/tesouraria/relatorios/programacao_recebimento_pagamento/index.html",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contabilidade > Lançamentos",
            urlPattern: "financeiro/contabilidade/lancamento_contab.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contabilidade > Lançamento Composto",
            urlPattern: "financeiro/contabilidade/lancamento_contab_composto.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contabilidade > EDI Contábil > Layouts de Arquivo",
            urlPattern: "financeiro/contabilidade/layouts_importacao_contabil.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contabilidade > EDI Contábil > Importação Contábil",
            urlPattern: "financeiro/contabilidade/importacao_contabil.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contabilidade > Exportação Contábil > Exportar dados - Padrão BMA",
            urlPattern: "financeiro/contabilidade/exportacao_contabil/expcont_inicio.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contabilidade > Exportação Contábil > Exportar Dados ? SAP",
            urlPattern: "financeiro/contabilidade/exportacao_contabil/exportar_dados_sap.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contabilidade > Zeramento",
            urlPattern: "financeiro/contabilidade/zeramento_contabil/index.html",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contabilidade > Relatórios > Balancete",
            urlPattern: "financeiro/contabilidade/relatorios/balancete/index.html",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contabilidade > Relatórios > Balanço Patrimonial",
            urlPattern: "financeiro/contabilidade/relatorios/balanco_patrimonial/index.html",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contabilidade > Relatórios > Demonstrativo de Acompanhamento Mensal",
            urlPattern: "financeiro/contabilidade/relat_acomp_mensal.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contabilidade > Relatórios > DRE - Demonstração do Resultado do Exercício",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=dre/relatorio&appPermissao=dre_permissao",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contabilidade > Relatórios > Demonstração do Valor Adicionado",
            urlPattern: "financeiro/contabilidade/relat_dva.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contabilidade > Relatórios > Livro Caixa",
            urlPattern: "financeiro/contabilidade/relat_razao.asp?livro_caixa=S",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contabilidade > Relatórios > Livro Diário",
            urlPattern: "financeiro/livros_fiscais.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contabilidade > Relatórios > Livro Razão",
            urlPattern: "financeiro/contabilidade/relatorios/livro_razao/index.html",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contabilidade > Relatórios > Fluxo de Caixa - Gerencial",
            urlPattern: "financeiro/contabilidade/relatorios/fluxo_caixa_gerencial/relatorio_fluxo_caixa_gerencial_filtros.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Fiscal > Fechamento (Super Simples) > Fechamento Mensal",
            urlPattern: "financeiro/contabilidade/fechamento/fechamento_mensal.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Fiscal > Fechamento (Super Simples) > Estorno de Fechamento",
            urlPattern: "financeiro/contabilidade/fechamento/estorno_fechamento.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Fiscal > Fechamento (Super Simples) > Super Simples",
            urlPattern: "financeiro/contabilidade/fechamento/super_simples.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Fiscal > Fechamento (Super Simples) > Relatórios > Super Simples",
            urlPattern: "financeiro/contabilidade/fechamento/relatorios/super_simples.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Fiscal > Fechamento (Super Simples) > Relatórios > Fechamentos",
            urlPattern: "financeiro/contabilidade/fechamento/relatorios/fechamento.asp",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Fiscal > Config. Tributária (Novo)",
            urlPattern: "fiscal/configuracao-tributaria/index.html#",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Fiscal > Relatórios > PIS/COFINS",
            urlPattern: "faturamento/relat_piscofins_ncumulativo.asp?modulo=fiscal",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Cadastros Auxiliares > Grupo",
            urlPattern: "suprimentos/index.html#/setores",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Cadastros Auxiliares > Linha",
            urlPattern: "suprimentos/index.html#/linhas",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Cadastros Auxiliares > Marca",
            urlPattern: "suprimentos/index.html#/marcas",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Cadastros Auxiliares > Coleção",
            urlPattern: "suprimentos/index.html#/colecoes",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Cadastros Auxiliares > Artigo",
            urlPattern: "suprimentos/index.html#/espessuras",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Cadastros Auxiliares > Unidade",
            urlPattern: "produtos/cad_auxiliares/unidade_cadastro.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Cadastros Auxiliares > Tamanho",
            urlPattern: "suprimentos/index.html#/tamanhos",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Cadastros Auxiliares > Classe de Tamanho",
            urlPattern: "produtos/cad_auxiliares/tamanho_classe_cadastro.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Cadastros Auxiliares > Cores",
            urlPattern: "suprimentos/index.html#/cores",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Cadastros Auxiliares > Classificação",
            urlPattern: "suprimentos/index.html#/classificacoes",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Cadastros Auxiliares > Config. Tributária",
            urlPattern: "produtos/cad_auxiliares/configuracao_tributaria.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Cadastros Auxiliares > Config. Tributária (Novo)",
            urlPattern: "fiscal/configuracao-tributaria/index.html#",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Cadastros Auxiliares > Regras por CFOP",
            urlPattern: "fiscal/regras-cfop-operacao/listagem/listagem-regras-cfop.html",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Cadastros Auxiliares > Depósito",
            urlPattern: "produtos/cad_auxiliares/depositos_cadastro.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Cadastros Auxiliares > Série Entrada",
            urlPattern: "produtos/cad_auxiliares/serie_entrada_cadastro.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Cadastros Auxiliares > Tabela de preço",
            urlPattern: "produtos/cad_auxiliares/tabela_cadastro.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Cadastros Auxiliares > Tabela de preço (Novo)",
            urlPattern: "suprimentos/index.html#/tabelas-precos",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Cadastros Auxiliares > Registros dos Campos Adicionais",
            urlPattern: "produtos/cad_auxiliares/registros_campos_adicionais.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Cadastros Auxiliares > Flags/Tags/Palavras-Chave",
            urlPattern: "suprimentos/index.html#/flags",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Cadastros Auxiliares > NCM/CEST > NCM",
            urlPattern: "produtos/cad_auxiliares/cadastro_ncm.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Cadastros Auxiliares > NCM/CEST > CEST",
            urlPattern: "produtos/cad_auxiliares/cest/views/cest.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Cadastros Auxiliares > Fundo de Combate à Pobreza",
            urlPattern: "produtos/cad_auxiliares/cadastro_icms_fcp.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Produtos (Novo)",
            urlPattern: "suprimentos/index.html#/listagem-produtos",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Opções dos Produtos ",
            urlPattern: "suprimentos/index.html#/opcoes-produtos",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Importação de Produtos ",
            urlPattern: "suprimentos/estoque/importacao/index.html",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Pesquisa de produtos por grade",
            urlPattern: "produtos/pesq_prod_grade.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Entrada XML (NF-e) ",
            urlPattern: "produtos/entrada_nfe/index.html",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Entrada de Compras > Entrada Manual",
            urlPattern: "produtos/entrada_compras.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Entrada de Compras > Entrada via Código Barras",
            urlPattern: "produtos/entrada_compras_codebar.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Entrada de Compras > Entrada de Lote de Pedidos",
            urlPattern: "produtos/entrada_compras_lote.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Entrada de Compras > Entrada XML (NF-e) ",
            urlPattern: "produtos/entrada_nfe/index.html",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Entrada de Compras > Entrada de Operação em Recusa",
            urlPattern: "fiscal/recusa-nf/recusa-nf.html",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Entrada de Compras > Cancelar Nota de Entrada",
            urlPattern: "produtos/entrada_compras.asp?esconde_itens=S",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Devolução de Compra Fácil (Novo)",
            urlPattern: "suprimentos/estoque/devolucao-entrada/index.html",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Recebimento de Mercadorias > Recebimento de Compras",
            urlPattern: "produtos/recebimento_mercadorias/compras/index.html",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Recebimento de Mercadorias > Recebimento de Transferência",
            urlPattern: "produtos/recebimento_mercadorias/transferencias/index.html",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Transferência entre Depósitos",
            urlPattern: "faturamento/transf/transf_depositos.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Remanejamento entre Unidades",
            urlPattern: "produtos/remanejamento_entre_unidades.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Balanço (Novo)",
            urlPattern: "suprimentos/estoque/balanco/index.html",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Balanço > Enviar arquivo",
            urlPattern: "produtos/balanco/envia_balanco.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Balanço > Balanço direto",
            urlPattern: "produtos/balanco/balanco_direto.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Balanço > Processar balanço",
            urlPattern: "produtos/balanco/relatorio_balanco.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Balanço > Consultar balanço",
            urlPattern: "produtos/balanco/consulta_balancos.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Balanço > Estornar balanço",
            urlPattern: "produtos/balanco/desfazer_balanco.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Balanço > Gerar arquivo TXT",
            urlPattern: "produtos/balanco/gera_txt.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Balanço > Analisar erros em Cód. Barras",
            urlPattern: "produtos/balanco/produtos_x_codebar.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Balanço de Controle > Cadastrar Balanço",
            urlPattern: "produtos/balanco/balanco_serial/cadastro_balanco_produtos_controle.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Balanço de Controle > Processar Balanço",
            urlPattern: "produtos/balanco/balanco_serial/processar_balanco_produtos_controle.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Balanço de Controle > Estornar Balanço",
            urlPattern: "produtos/balanco/balanco_serial/estorno_balanco_produtos_controle.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Desmembramento > Associação produtos desmembramento",
            urlPattern: "produtos/associacao_produtos_desmembramento.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Desmembramento > Desmembramento de produtos",
            urlPattern: "produtos/desmembramento_produtos.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Promoções > Cadastro de Campanhas",
            urlPattern: "produtos/cadastro_campanha.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Promoções > Cadastro de Campanhas (Novo)",
            urlPattern: "webapp/acesso.asp?appRoute=promocoes/campanha",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Promoções > Cadastro de Promoções",
            urlPattern: "produtos/formulario_cadastro_promocao.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Promoções > Cadastro de Promoções (Novo)",
            urlPattern: "webapp/acesso.asp?appRoute=promocoes/promocao",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Promoções > Desabilitar Promoções",
            urlPattern: "produtos/desabilitar_promocao_referencia.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Promoções > Relatórios > Lista de Promoções",
            urlPattern: "produtos/cadastro_promocao.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Promoções > Relatórios > Produtos em Promoção",
            urlPattern: "produtos/relatorio_produtos_promocao.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Transferências > Conferência",
            urlPattern: "produtos/transferencia/conferencia_listagem.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Transferências > Endosso",
            urlPattern: "produtos/transferencia/endosso_intermediaria.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > FCI - Ficha de Conteúdo de Importação > Cadastro de FCI",
            urlPattern: "produtos/ficha_conteudo_importacao/cadastro/ficha_conteudo_importacao.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > FCI - Ficha de Conteúdo de Importação > Geração Arquivo - FCI",
            urlPattern: "produtos/ficha_conteudo_importacao/exportacao/exportar.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > EDI - Intercâmbio Eletrônico de Dados > Iniciar EDI",
            urlPattern: "edi/gerenciador.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Entrada CT-e ",
            urlPattern: "suprimentos/index.html#/entrada-cte/painel-entrada-cte",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Conhecimento de Frete",
            urlPattern: "produtos/conhecimento_frete.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Nota fiscal Complementar/Ajuste Entrada",
            urlPattern: "faturamento/complemento_icms.asp?mod=suprimentos",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Agendar alteração de preços",
            urlPattern: "webapp/acesso.asp?appRoute=/agendamento-precos/listagem-agendamento",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Notas de Compra",
            urlPattern: "produtos/relatorio_notas.asp?modulo=estoque",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Lista de Preços",
            urlPattern: "produtos/relatorio_lista_precos.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Registro de Inventário OLD",
            urlPattern: "produtos/relatorio_inventario_old.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Registro de Inventário",
            urlPattern: "produtos/relatorio_inventario_new.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Resumo de Compras Pendentes",
            urlPattern: "produtos/resumo_compras_balanco.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Histórico Movimento",
            urlPattern: "produtos/relatorio_movimento_produto.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Histórico Movimento ",
            urlPattern: "suprimentos/index.html#/relatorios/historico-movimento",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Conferência de preços",
            urlPattern: "produtos/relatorio_conf_precos.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Etiquetas CODEBAR",
            urlPattern: "produtos/etiquetas_por_item.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Conferência de preços da nota fiscal",
            urlPattern: "produtos/relatorio_conf_precos_item_atual_filtro.asp?conferencia_nota_fiscal=S",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Produtos Recebidos por Período",
            urlPattern: "produtos/relatorio_prod_comprados.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Produtos Cadastrados",
            urlPattern: "produtos/relatorio_produtos.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Saldo em estoque por Grade",
            urlPattern: "produtos/relatorio_prod_estoque.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Saldo em estoque",
            urlPattern: "produtos/relatorio_saldos.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Manutenção",
            urlPattern: "produtos/relatorio_manut.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > EDI - Produtos Layout (TXT)",
            urlPattern: "logistica/config_layout.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > EDI - Produtos (Importação)",
            urlPattern: "logistica/importacao_produtos.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Análise para Compras",
            urlPattern: "produtos/relatorio_analise_compras.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Demanda de Produtos",
            urlPattern: "produtos/relatorio_demanda_produtos.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Histórico de Status de Produtos",
            urlPattern: "produtos/relatorio_historico_status.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Relatório de Consulta de Lotes",
            urlPattern: "produtos/relatorio_lotes.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Compras/Vendas e Saldo por Empresa",
            urlPattern: "produtos/relatorio_compra_venda_saldo_empresa.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Saldo de Controles",
            urlPattern: "produtos/relatorio_saldo_seriais.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Saldo por Empresa",
            urlPattern: "produtos/relatorio_saldo_por_empresa.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Resumo de Saldo Mensal por Grupo ",
            urlPattern: "produtos/relatorios/controle_movimentacao_estoque_setor/index.html",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Tempo de Inatividade de Estoque por Empresa ",
            urlPattern: "produtos/relatorios/tempo_de_inatividade_por_empresa/index.html",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Histórico de Controle",
            urlPattern: "produtos/relatorio_historico_serial.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Reposição de Produtos",
            urlPattern: "produtos/reposicao_produtos.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Precificação de Produtos",
            urlPattern: "produtos/precificacao_produtos.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Detalhamento de Custos",
            urlPattern: "produtos/relatorio_custo_por_nota.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Estoque Por Faixa de Preço",
            urlPattern: "produtos/relatorio_estoque_faixa_preco.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Conhecimento de Frete",
            urlPattern: "produtos/relatorio_conhecimento_frete.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Relatório Custo de Entrada",
            urlPattern: "produtos/relatorio_custo_empresa_produtos.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Divergências de Saldo de Controle",
            urlPattern: "produtos/relatorio_divergencias_saldo.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Atribuir NOVA Origem de Controle",
            urlPattern: "produtos/desfazer_inversao_serial_nf_entrada.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Recebimento de Mercadorias",
            urlPattern: "produtos/recebimento_mercadorias/relatorio/index.html?limparCache=1",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Giro Médio e Cobertura - Dashboard ",
            urlPattern: "compras/relatorios/giro_medio_cobertura_dashboard/index.html",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Compras por Fornecedor",
            urlPattern: "produtos/relatorios/compras_agrupamento_fornecedor/index.html",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Controle de Giro de Estoque por Segmentação",
            urlPattern: "produtos/relatorios/giro_estoque_por_grupo/index.html",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Saldo de Produtos por Referência",
            urlPattern: "webapp/acesso.asp?appRoute=relatorios/saldo-produto-por-referencia",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Ajuste de Preço",
            urlPattern: "webapp/acesso.asp?appRoute=relatorios/ajuste-precos",
            manual: ""
        },
        {
            caminho: "Suprimentos > Compras > Cadastros Auxiliares > Sugestão de Compra",
            urlPattern: "compras/cad_auxiliares/sugestao_compra_cadastro.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Compras > Cadastros Auxiliares > Formulários",
            urlPattern: "compras/cad_auxiliares/formularios_compras.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Compras > Cadastros Auxiliares > Campos Adicionais",
            urlPattern: "compras/cad_auxiliares/cadastro_campos_adicionais.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Compras > Cadastros Auxiliares > Status de pedidos",
            urlPattern: "compras/cad_auxiliares/cadastro_status_pedido.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Compras > Pedido de compra (manual)",
            urlPattern: "compras/cadastra_pedido.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Compras > Pedido de compra (automático)",
            urlPattern: "compras/relatorio_faltas.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Compras > Pedido de compra (grade)",
            urlPattern: "compras/pedido_grade_cadastro.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Compras > Acompanhamento de Showroom",
            urlPattern: "compras/showroom_acompanhamento.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Compras > Requisições > Nova Requisição",
            urlPattern: "compras/produtos_requisicao.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Compras > Requisições > Conferência Requisição",
            urlPattern: "compras/requisicao_conferencia.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Compras > Requisições > Listagem de Requisições",
            urlPattern: "compras/requisicao_filtro.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Compras > Requisições > Cancelar/Excluir Requisições",
            urlPattern: "compras/cancela_requisicao.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Compras > Aprovação de pedido",
            urlPattern: "compras/pedido_aprovacao.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Compras > Alteração/Cancelamento",
            urlPattern: "compras/altera_pedido.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Compras > Junção de Pedidos",
            urlPattern: "compras/juncao_pedidos.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Compras > Cálculos > Calcular Curva ABC",
            urlPattern: "compras/relatorio_abc.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Compras > Pré-Pedidos > Negociação",
            urlPattern: "compras/pre_pedidos/negociacao.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Compras > Pré-Pedidos > Finalização",
            urlPattern: "compras/pre_pedidos/finalizacao.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Compras > Formulários",
            urlPattern: "compras/formulario.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Compras > Relatórios > Pedidos",
            urlPattern: "compras/relatorio_pedidos.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Compras > Relatórios > Divergências",
            urlPattern: "compras/relatorio_divergencias.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Compras > Relatórios > Relatório de Giro Médio",
            urlPattern: "compras/relat_curva_abc_giro_medio.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Compras > Relatórios > Relatório de Cobertura",
            urlPattern: "compras/relat_curva_abc_cobertura_novo.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Compras > Relatórios > Status do Saldo dos Produtos",
            urlPattern: "compras/relatorio_status_produtos.asp?tipo=compras",
            manual: ""
        },
        {
            caminho: "Suprimentos > Compras > Relatórios > Análise de Estoque em Grade para Compra",
            urlPattern: "compras/relat_analise_estoque_compra.asp",
            manual: ""
        },
        {
            caminho: "Conta Digital (Stone Banking) > Iniciar Conta Digital",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=openbanking&appPermissao=open_banking_permissao",
            manual: ""
        },
        {
            caminho: "Faturamento > Cadastros Auxiliares > Natureza de Operação",
            urlPattern: "faturamento/cad_auxiliares/cadastro_cfop.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Cadastros Auxiliares > Vendedores/Compradores ",
            urlPattern: "faturamento/cadastro_vendedores/index.html",
            manual: ""
        },
        {
            caminho: "Faturamento > Cadastros Auxiliares > Configurar pagamentos",
            urlPattern: "faturamento/configurar_pagamentos/index.html",
            manual: ""
        },
        {
            caminho: "Faturamento > Cadastros Auxiliares > Cadastro de Coeficientes",
            urlPattern: "faturamento/cad_auxiliares/cadastro_coeficientes.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Cadastros Auxiliares > Planos de Pagamento",
            urlPattern: "faturamento/cad_auxiliares/cadastro_de_plano.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Cadastros Auxiliares > Série Própria",
            urlPattern: "faturamento/cad_auxiliares/cadastro_serie.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Cadastros Auxiliares > Motivo de Devolução",
            urlPattern: "faturamento/cad_auxiliares/cadastro_motivo_devolucao.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Cadastros Auxiliares > Faixas de Desconto",
            urlPattern: "faturamento/cad_auxiliares/cadastro_faixa_desconto.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Cadastros Auxiliares >  Contratos (Novo) > Listagem de contratos por tipo",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=CadastroContratos/ListagemContrato&appPermissao=contratos_permissao",
            manual: ""
        },
        {
            caminho: "Faturamento > Cadastros Auxiliares >  Contratos (Novo) > Consulta de contratos",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=CadastroContratos/ConsultaContratos&appPermissao=contratos_permissao",
            manual: ""
        },
        {
            caminho: "Faturamento > Cadastros Auxiliares > Faixas de Preço",
            urlPattern: "faturamento/cad_auxiliares/cadastro_faixa_preco.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Cadastros Auxiliares > Observações Padrões",
            urlPattern: "faturamento/cad_auxiliares/cadastro_observacoes_padroes.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Cadastros Auxiliares > Tabelas de Comissão",
            urlPattern: "faturamento/cad_auxiliares/tabelas_comissoes.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Cadastros Auxiliares > Motivo da Não Conversão",
            urlPattern: "agendamento/cad_auxiliares/motivos_nao_venda.asp?tipo=faturamento",
            manual: ""
        },
        {
            caminho: "Faturamento > Cadastros Auxiliares > Motivos de Desconto (Novo)",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=cadastros/motivos-desconto&appPermissao=motivos_desconto_permissao",
            manual: ""
        },
        {
            caminho: "Faturamento > Cadastros Auxiliares > Serviços Ópticos Agregados",
            urlPattern: "faturamento/cad_auxiliares/cadastro_servicos_opticos_agregados.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Cadastros Auxiliares > Formato de Aro",
            urlPattern: "faturamento/cad_auxiliares/cadastro_formato_aro.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Cadastros Auxiliares > Motivo de Cancelamento de CF",
            urlPattern: "faturamento/cad_auxiliares/motivo_cancelamento_cf.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Cadastros Auxiliares > Status do Pedido Óptico",
            urlPattern: "faturamento/cad_auxiliares/cadastro_status_pedido_optico.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Cadastros Auxiliares > Pergunta Final da Venda",
            urlPattern: "faturamento/cad_auxiliares/pergunta_venda/pergunta_venda.html",
            manual: ""
        },
        {
            caminho: "Faturamento > Orçamento/Pedido > Cadastros Auxiliares > Classes",
            urlPattern: "faturamento/orcamento/cad_auxiliares/classe.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Orçamento/Pedido > Cadastros Auxiliares > Formulários",
            urlPattern: "faturamento/orcamento/cad_auxiliares/cad_proposta_venda.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Orçamento/Pedido > Cadastros Auxiliares > Posição",
            urlPattern: "faturamento/orcamento/cad_auxiliares/posicao.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Orçamento/Pedido > Cadastro de Orçamentos/Pedidos",
            urlPattern: "faturamento/orcamento/cadastro_orcamento.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Orçamento/Pedido > Alteração de Orçamentos/Pedidos",
            urlPattern: "faturamento/orcamento/altera_orcamento.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Orçamento/Pedido > Alteração de Endereço de Entrega/Observações",
            urlPattern: "faturamento/orcamento/alterarurlPatternEntregaEObservacoes.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Orçamento/Pedido > Copiar Pedido",
            urlPattern: "faturamento/orcamento/copia_pedido.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Orçamento/Pedido > Atualiza Preços",
            urlPattern: "faturamento/orcamento/atualiza_preco_orcamento.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Orçamento/Pedido > Transforma em Pedido / Aprova",
            urlPattern: "faturamento/orcamento/transforma_orcamento_pedido.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Orçamento/Pedido > Expedição > Expedição de Orçamentos/Pedidos",
            urlPattern: "faturamento/orcamento/aprovacao_pedido_expedicao2.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Orçamento/Pedido > Expedição > Relatório de Orçamentos/Pedidos",
            urlPattern: "faturamento/orcamento/relatorio_expedicao2.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Orçamento/Pedido > Reserva de Estoque",
            urlPattern: "faturamento/orcamento/reserva_estoque_form.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Orçamento/Pedido > Agrupamento de Pedido",
            urlPattern: "faturamento/orcamento/agrupamento_de_pedido.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Orçamento/Pedido > Formulários de Orçamentos/Pedidos",
            urlPattern: "faturamento/orcamento/proposta_venda.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Orçamento/Pedido > Cancelamento/Encerramento de Orçamentos/Pedidos",
            urlPattern: "faturamento/orcamento/cancela_orcamento.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Orçamento/Pedido > Relatórios > Orçamentos/Pedidos",
            urlPattern: "faturamento/orcamento/relatorio_orc.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Orçamento/Pedido > Relatórios > Produtos Vendidos/Orçados",
            urlPattern: "faturamento/orcamento/relatorio_prod_vendidos_orc.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Orçamento/Pedido > Relatórios > Produtos à Faturar",
            urlPattern: "faturamento/orcamento/relatorio_prod_orcado.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Orçamento/Pedido > Relatórios > Expedição",
            urlPattern: "faturamento/orcamento/relatorio_pedido_expedicao.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Orçamento/Pedido > Relatórios > Produtos Expedidos",
            urlPattern: "faturamento/orcamento/produtos_expedidos.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Orçamento/Pedido > Relatórios > Ranking de Pedidos",
            urlPattern: "faturamento/orcamento/ranking_pedidos.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Orçamento/Pedido > Relatórios > Pedidos de Venda X Pedidos de Compra",
            urlPattern: "faturamento/orcamento/relatorio_pedidos_venda_compra.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Entrega Futura > Venda para Entrega Futura",
            urlPattern: "fiscal/entrega-futura/venda-entrega-futura.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Entrega Futura > Remessa de Entrega",
            urlPattern: "fiscal/entrega-futura/remessa-entrega/index.html",
            manual: ""
        },
        {
            caminho: "Faturamento > Emissão de Nota Fiscal",
            urlPattern: "faturamento/cadastro_nota_fiscal.asp?ajusteMenu=S",
            manual: ""
        },
        {
            caminho: "Faturamento > Nota Fiscal > Emitir Nota Fiscal Saída",
            urlPattern: "faturamento/cadastro_nota_fiscal.asp?sub_rotina=emitir_nota_fiscal_saida",
            manual: ""
        },
        {
            caminho: "Faturamento > Nota Fiscal > Faturar Pedido",
            urlPattern: "faturamento/cadastro_nota_fiscal.asp?sub_rotina=faturar_pedido",
            manual: ""
        },
        {
            caminho: "Faturamento > Nota Fiscal > Devolução de venda",
            urlPattern: "faturamento/cadastro_nota_fiscal.asp?sub_rotina=devolucao_venda",
            manual: ""
        },
        {
            caminho: "Faturamento > Nota Fiscal > Devolução de compra",
            urlPattern: "faturamento/cadastro_nota_fiscal.asp?sub_rotina=devolucao_compra",
            manual: ""
        },
        {
            caminho: "Faturamento > Nota Fiscal > Devolução de Compra Fácil (Novo)",
            urlPattern: "suprimentos/estoque/devolucao-entrada/index.html",
            manual: ""
        },
        {
            caminho: "Faturamento > Nota Fiscal > Complementar/Ajuste de Saída",
            urlPattern: "faturamento/complemento_icms.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Nota Fiscal > Substitutiva de Cupom Fiscal SAT ou NFC-e",
            urlPattern: "faturamento/cadastro_nota_fiscal.asp?sub_rotina=nota_fiscal_substitutiva_cupom_sat_nfce",
            manual: ""
        },
        {
            caminho: "Faturamento > Nota Fiscal > Transferência de ICMS",
            urlPattern: "faturamento/nota_transferencia_icms.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Nota Fiscal > Reimprimir etiquetas de endereçamento",
            urlPattern: "faturamento/cadastro_nota_fiscal.asp?sub_rotina=reimprimir_etiquetas_enderecamento",
            manual: ""
        },
        {
            caminho: "Faturamento > Nota Fiscal > Informações do B2B ? NF-e",
            urlPattern: "produtos/b2b_numero_pedido.asp?origem_b2b=nota_fiscal",
            manual: ""
        },
        {
            caminho: "Faturamento > Nota Fiscal > Cancelar/Excluir Nota Fiscal Saída",
            urlPattern: "faturamento/cadastro_nota_fiscal.asp?sub_rotina=cancelar_excluir_nota_fiscal",
            manual: ""
        },
        {
            caminho: "Faturamento > Venda Fácil",
            urlPattern: "faturamento/vendafacil/acesso_webapp.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Configurações",
            urlPattern: "faturamento/crediario/index.html",
            manual: ""
        },
        {
            caminho: "Faturamento > Venda Consignada > Remessa em Consignação",
            urlPattern: "faturamento/venda_consignada/remessa_em_consignacao/remessa_em_consignacao.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Venda Consignada > Devolução Física",
            urlPattern: "faturamento/venda_consignada/devolucao_fisica/devolucao_fisica.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Venda Consignada > Devolução Simbólica",
            urlPattern: "faturamento/venda_consignada/devolucao_simbolica/devolucao_simbolica.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Venda Consignada > Faturar Mercadorias em Consignação",
            urlPattern: "faturamento/venda_consignada/faturar_mercadorias_consignadas/faturar_mercadorias_consignadas.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Venda Consignada > Relatório de Mercadorias Consignadas",
            urlPattern: "faturamento/venda_consignada/relatorio_mercadorias_consignadas/relatorio_mercadorias_consignadas.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Demonstrações (Painel) ",
            urlPattern: "demonstracao/painel/painel-demonstracao.html",
            manual: ""
        },
        {
            caminho: "Faturamento > Remessas e Retornos > Remessas e Retornos",
            urlPattern: "fiscal/remessa-retorno/index.html",
            manual: ""
        },
        {
            caminho: "Faturamento > Remessas e Retornos > Entradas e Retornos",
            urlPattern: "fiscal/entrada-retorno/index.html",
            manual: ""
        },
        {
            caminho: "Faturamento > Baixa de Consumo",
            urlPattern: "produtos/baixa_consumo.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Romaneio de Carga-Notas Fiscais",
            urlPattern: "faturamento/romaneio_cadastro.asp?origem=faturamento",
            manual: ""
        },
        {
            caminho: "Faturamento > Cupons de Desconto",
            urlPattern: "faturamento/cadastro_cupom/index.html",
            manual: ""
        },
        {
            caminho: "Faturamento > Loja > Contingência",
            urlPattern: "vendas/vendas.asp?contingencia=S",
            manual: ""
        },
        {
            caminho: "Faturamento > Loja > Painel",
            urlPattern: "vendas/vendas.asp?painel=S",
            manual: ""
        },
        {
            caminho: "Faturamento > Loja > Relatórios > Conferência de Caixas",
            urlPattern: "faturamento/relatorio_conferencia_caixa.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Loja > Relatórios > Impressão de Fichas",
            urlPattern: "faturamento/relat_imp_etiqueta.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Loja > Relatórios > Impressão de Lista da Vez",
            urlPattern: "faturamento/imprime_lista_da_vez.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Loja > Relatórios > Lista Negra",
            urlPattern: "faturamento/relatorio_lista_negra.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Loja > Relatórios > Lista da Vez",
            urlPattern: "faturamento/relatorio_lista_da_vez.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Loja > Relatórios > Listagem dos Fechamentos",
            urlPattern: "faturamento/relatorio_fechamento_caixa.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Loja > Relatórios > Relatório Pergunta no final da Venda",
            urlPattern: "faturamento/loja/relatorios/pergunta_final_venda/pergunta_final_venda.html",
            manual: ""
        },
        {
            caminho: "Faturamento > Convênios > Fechamento de Convênios",
            urlPattern: "faturamento/convenios/conv_fechamento.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Convênios > Saldo do Conveniado",
            urlPattern: "faturamento/convenios/saldo_conveniado.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Comissões > Lançar Comissão Manual",
            urlPattern: "faturamento/comissoes/adicionar_comissao.asp?operacao=I",
            manual: ""
        },
        {
            caminho: "Faturamento > Comissões > Relatório de Comissões",
            urlPattern: "faturamento/comissoes/relat_comissoes.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Royalties > Lançar Royalty Manual",
            urlPattern: "faturamento/royalties/adicionar_royalty.asp?operacao=I",
            manual: ""
        },
        {
            caminho: "Faturamento > Royalties > Definir Royalty para Pedido",
            urlPattern: "faturamento/royalties/setar_royalty_pedido.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Royalties > Calcular Royalty",
            urlPattern: "faturamento/royalties/sproyalties.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Royalties > Relatório de Royalties",
            urlPattern: "faturamento/royalties/relat_royalties.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Suframa > Geração Arquivo Lote de Notas Fiscais - WS Sinal",
            urlPattern: "faturamento/arquivo_ws_sinal.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Troca Fácil > Realizar Troca Fácil",
            urlPattern: "faturamento/vendafacil/acesso_webapp.asp?rota=trocafacilerppos&ignoraConfiguracao=1",
            manual: ""
        },
        {
            caminho: "Faturamento > Troca Fácil > Realizar Troca sem token (Novo)",
            urlPattern: "webapp/acesso.asp?appRoute=trocafacil/gera-troca-ticket",
            manual: ""
        },
        {
            caminho: "Faturamento > Troca Fácil > Relatório Troca Fácil",
            urlPattern: "faturamento/troca_unificada/relatorio_troca_unificada/relatorio_troca_unificada.html",
            manual: ""
        },
        {
            caminho: "Faturamento > Troca Fácil > Relatório de Vale Troca",
            urlPattern: "faturamento/troca_unificada/relatorio_vale_trocas/index.html",
            manual: ""
        },
        {
            caminho: "Faturamento > Troca Fácil > Gerar Ticket Manual Troca Fácil",
            urlPattern: "faturamento/garantia_nacional/ticket-manual/index.html",
            manual: ""
        },
        {
            caminho: "Faturamento > Lançamento de vale avulso em lote",
            urlPattern: "faturamento/vale_avulso_lote/tela_filtro_vale_avulso_lote.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Recuperação de Cupom Fiscal > Iniciar Recuperação de Cupom Fiscal",
            urlPattern: "faturamento/recuperador_mapa_resumo/recuperador_cupom_fiscal.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Aprovação de Crédito",
            urlPattern: "faturamento/aprovacao_credito_filtros.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Royalties/Taxa Propaganda",
            urlPattern: "faturamento/royalties/relat_royalty_propaganda.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Vendas com Promoções",
            urlPattern: "faturamento/vendas_promocoes/relatorio_promocoes.html",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Faturamento Diário",
            urlPattern: "faturamento/relat_fat_diario.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Faturamento por Indicações",
            urlPattern: "faturamento/listagem_relatorio_medico.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Faturamento por Centro de Custos",
            urlPattern: "faturamento/relatorio_fat_cc.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Faturamento por Faixa de Horário",
            urlPattern: "faturamento/relat_fat_horario.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Faturamento por Faixa de Preço",
            urlPattern: "faturamento/relatorio_fat_faixa_preco.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Faturamento por Período",
            urlPattern: "faturamento/relat_fat_periodo.asp?modulo=faturamento&filtra_empresa=S",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Faturamento por Planos",
            urlPattern: "faturamento/relat_fat_planos.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Faturamento por Série",
            urlPattern: "faturamento/relat_fat_serie.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Faturamento Vendedor",
            urlPattern: "faturamento/relatorio_fat_vendedor.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Faturamento Com Agrupamento por Hierarquia de Tempo",
            urlPattern: "faturamento/relatorios/agrupamento_hierarquia_tempo/index.html",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Itens Transferidos entre Unidades",
            urlPattern: "faturamento/relatorio_prod_vendidos.asp?relatProdVendidos=S",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Movimento Diário",
            urlPattern: "faturamento/relatorio_diario.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > NFs de Venda x NFs de Entrega",
            urlPattern: "faturamento/rela_fat_nf_entrega.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Painel de Vendas",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=relatorioVendas&appPermissao=relatorioVendas_permissao",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Produtos de Grade Vendidos",
            urlPattern: "faturamento/relatorio_prod_vendidos_grade.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Faturamento Grade com Percentual por Coleção",
            urlPattern: "faturamento/relatorios/faturamento_grade_percentual_por_colecao/index.html",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Produtos Vendidos em Cortesia",
            urlPattern: "faturamento/relatorio_prod_vend_cortesia.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Produtos/Serv.Vendidos",
            urlPattern: "faturamento/relatorio_prod_vendidos.asp?ajusteMenu=S",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Análise de Quantidade Vendida Semanal por Coleção",
            urlPattern: "faturamento/relatorios/analise_quantidade_vendida_semanal_colecao/index.html",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Performance de Vendedores",
            urlPattern: "faturamento/relatorios/performance_por_vendedor/index.html",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Performance de Lojas",
            urlPattern: "faturamento/relatorios/performance_por_loja/index.html",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Performance por Estrutura Mercadológica",
            urlPattern: "faturamento/relatorios/performance_por_setor/index.html",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Estoque x Vendas",
            urlPattern: "faturamento/relatorios/performance_loja_faixa_preco_estrutura_mercadologica/index.html",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Margem de Contribuição por Estrutura Mercadológica",
            urlPattern: "faturamento/relatorios/margem_contribuicao_estrutura_mercadologica/index.html",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Ranking de Clientes",
            urlPattern: "faturamento/relatorio_ranking.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Ranking por Produtos",
            urlPattern: "faturamento/relatorio_ranking_produtos.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Relatório de Pacote e Associação de Itens",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=relatorioPacoteAssociacaoItens&appPermissao=relatorio_associacao_itens_permissao",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Relatório Fechamento Caixa",
            urlPattern: "faturamento/relatorios/abertura_fechamento_caixa/abertura_fechamento_caixa.html",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Resumo Comercial",
            urlPattern: "faturamento/relatorio_resumo_comercial.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Vendas por Empresa x Grupo",
            urlPattern: "faturamento/relat_vendas_empresas_setor.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Vendas por Empresa x Grupo (Novo)",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=relatorio-venda-empresa-grupo&appPermissao=relatorio_venda_empresa_grupo_permissao",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Vendas por Lojas",
            urlPattern: "faturamento/relatorio_vendas_lojas.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Relatório de Pré-Vendas",
            urlPattern: "webapp/acesso.asp?appRoute=relatorios/pre-venda",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Vendas Cancelados no POS",
            urlPattern: "faturamento/relatorios/vendas_canceladas_pos/vendas_canceladas_pos.html",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Cupons Cancelados",
            urlPattern: "faturamento/relat_cupons_cancelados.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Vendas por Tipo de Cartão",
            urlPattern: "faturamento/relat_venda_tipo_cartao_param.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Entrantes por Franquia",
            urlPattern: "faturamento/rel_entrantes_lojas.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Performance de Vendas por Lifestyle (Grupo)",
            urlPattern: "faturamento/relatorios/performance_vendas_grupo/index.html",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Pedidos emitidos via Showrooming",
            urlPattern: "faturamento/showrooming/relatorios/faturamento_showrooming.html",
            manual: ""
        },
        {
            caminho: "Faturamento > Relatórios > Relatório de Vendas/Motivos Desconto (Novo)",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=relatorios/motivo-desconto&appPermissao=motivos_desconto_permissao",
            manual: ""
        },
        {
            caminho: "NF-e > Iniciar NF-e",
            urlPattern: "nf_e/nfe.asp",
            manual: ""
        },
        {
            caminho: "NFC-e > Gerencial MID-e",
            urlPattern: "sat/sat.asp",
            manual: ""
        },
        {
            caminho: "Serviços (Novo) > Agenda",
            urlPattern: "servicos/agenda/index.asp",
            manual: ""
        },
        {
            caminho: "Serviços (Novo) > Agendamento Online (Novo)",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=configuracaoAgendamentoOnline&appPermissao=agendaonline_permissao",
            manual: ""
        },
        {
            caminho: "Serviços (Novo) > Expedição de insumos (Novo)",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=/ExpedicaoInsumosComanda/ListagemExpedicaoInsumoComanda&appPermissao=listagem_expedicao_comanda_permissao",
            manual: ""
        },
        {
            caminho: "Serviços (Novo) > Importação de Serviços (Novo)",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=ImportacaoServicos/ListagemImportacaoServicos&appPermissao=importacao_permissao",
            manual: ""
        },
        {
            caminho: "Serviços (Novo) > Cadastros Auxiliares > Serviços (Novo)",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=CadastroServicos/ListagemServicos&appPermissao=listagem_servicos_permissao",
            manual: ""
        },
        {
            caminho: "Serviços (Novo) > Cadastros Auxiliares > Pacotes (Novo)",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=CadastroPacotes/ListagemPacotes&appPermissao=listagem_pacotes_permissao",
            manual: ""
        },
        {
            caminho: "Serviços (Novo) > Cadastros Auxiliares > Equipamentos",
            urlPattern: "webapp/acesso.asp?appRoute=cadastro-equipamento/cadastro-equipamentos",
            manual: ""
        },
        {
            caminho: "Serviços (Novo) > Cadastros Auxiliares > Formulários (Novo)",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=/CadastroFormularios/ListagemFormularios&appPermissao=formularios_permissao",
            manual: ""
        },
        {
            caminho: "Serviços (Novo) > Cadastros Auxiliares > Associações de itens (Novo)",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=CadastroAssociacoes/ListagemAssociacoes&appPermissao=associacao_permissao",
            manual: ""
        },
        {
            caminho: "Serviços (Novo) > Cadastros Auxiliares > Espaços (Novo)",
            urlPattern: "webapp/acesso.asp?appRoute=CadastroEspaco/CadastroEspacos",
            manual: ""
        },
        {
            caminho: "Serviços (Novo) > Cadastros Auxiliares > CNAE (Novo)",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=CNAE/Listagem&appPermissao=listagem_cnae_permissao",
            manual: ""
        },
        {
            caminho: "Serviços (Novo) > Cadastros Auxiliares > Prontuário Eletrônico",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=modelos-prontuario/cadastro-modelos-prontuario&appPermissao=prontuario_eletronico",
            manual: ""
        },
        {
            caminho: "Serviços (Novo) > Relatórios > Saldo de Serviços (Novo)",
            urlPattern: "webapp/acesso.asp?appRoute=RelatorioSaldoServicos",
            manual: ""
        },
        {
            caminho: "Serviços (Novo) > Relatórios > Equipamentos",
            urlPattern: "webapp/acesso.asp?appRoute=relatorio-equipamentos",
            manual: ""
        },
        {
            caminho: "Serviços (Novo) > Relatórios > Agendamentos (Novo)",
            urlPattern: "webapp/acesso.asp?appRoute=relatorioAgendamentos",
            manual: ""
        },
        {
            caminho: "Serviços (Novo) > Relatórios > Logs de Serviços (Novo)",
            urlPattern: "webapp/acesso.asp?appRoute=relatorioLog",
            manual: ""
        },
        {
            caminho: "Serviços (Novo) > Relatórios > Comissões de Serviços (Novo)",
            urlPattern: "webapp/acesso.asp?appRoute=/RelatorioComissoes",
            manual: ""
        },
        {
            caminho: "Serviços (Novo) > Relatórios > Comissões de Serviços Nota Bipartida (Novo)",
            urlPattern: "webapp/acesso.asp?appRoute=/relatorioComissoesParceiro",
            manual: ""
        },
        {
            caminho: "Serviços (Novo) > Relatórios > Serviços Vendidos (Novo)",
            urlPattern: "webapp/acesso.asp?appRoute=/relatorioServicosVendidos",
            manual: ""
        },
        {
            caminho: "Serviços (Novo) > Relatórios > Prontuário Eletrônico",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=relatorio-prontuarios&appPermissao=prontuario_eletronico",
            manual: ""
        },
        {
            caminho: "Serviços > Cadastros Auxiliares > Pacotes",
            urlPattern: "webapp/acesso.asp?appRoute=PacotesPainelListagem",
            manual: ""
        },
        {
            caminho: "Serviços > Gerar Arquivo NF-em São Paulo",
            urlPattern: "servicos/exportar_nfsesp.asp",
            manual: ""
        },
        {
            caminho: "Report Viewer > Iniciar Report Viewer",
            urlPattern: "abrir_sessao_aspx",
            manual: ""
        },
        {
            caminho: "Aplicativos > Scarf",
            urlPattern: "framework/scarf/sobre.asp",
            manual: ""
        },
        {
            caminho: "Aplicativos > Exportador de dados",
            urlPattern: "produtos/formularios/formulario_cadastro.asp",
            manual: ""
        },
        {
            caminho: "Aplicativos > Contatos",
            urlPattern: "gestor_web/acesso_menu_aplicativos/contatos_v4.asp",
            manual: ""
        },
        {
            caminho: "Aplicativos > Anexos Compartilhados",
            urlPattern: "gestor_web/acesso_menu_aplicativos/anexos_compartilhados_v4.asp",
            manual: ""
        },
        {
            caminho: "Aplicativos > Importador de Nota via XML",
            urlPattern: "gestor_web/importadorNotaXml/importador_xml.html",
            manual: ""
        },
        {
            caminho: "Aplicativos > Manutenção Venda Fácil",
            urlPattern: "faturamento/vendafacil/acesso_webapp",
            manual: ""
        },
        {
            caminho: "Relatórios > Acessar",
            urlPattern: "gerador_de_relatorios/fonte_de_dados/index.html",
            manual: ""
        },
        {
            caminho: "B2C > Cadastros Auxiliares > Atributos de Produto",
            urlPattern: "parametros/atributos_produto/index.html",
            manual: ""
        },
        {
            caminho: "B2C > Cadastros Auxiliares > Flags/Tags/Palavras Chave de Produtos",
            urlPattern: "suprimentos/index.html#/flags",
            manual: ""
        },
        {
            caminho: "B2C > Cadastros Auxiliares > Status",
            urlPattern: "b2c/b2c_status_cadastro.asp",
            manual: ""
        },
        {
            caminho: "B2C > Cadastros Auxiliares > Volumes",
            urlPattern: "suprimentos/index.html#/volumes",
            manual: ""
        },
        {
            caminho: "B2C > Painel Vendas",
            urlPattern: "b2c/painel_vendas/index.html",
            manual: ""
        },
        {
            caminho: "B2C > Compras efetuadas",
            urlPattern: "b2c/b2c_start.asp",
            manual: ""
        },
        {
            caminho: "B2C > Rastreamento de Pedido",
            urlPattern: "b2c/rastreamento_pedido_start.asp",
            manual: ""
        },
        {
            caminho: "Integração > Hub Marketplaces > Configurações (Novo)",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=hubMarketplace/configuracoes&appPermissao=hubIntegracao_configuracoes_permissao",
            manual: ""
        },
        {
            caminho: "Integração > Hub Marketplaces > Plugg.To (Novo)",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=/hubMarketplace/acessarPluggto&appPermissao=hubIntegracao_acessarPluggto_permissao",
            manual: ""
        },
        {
            caminho: "Integração > Manutenção de produtos B2C",
            urlPattern: "webapp/acesso.asp?appRoute=produtos/manutencao-produtos-b2c",
            manual: ""
        },
        {
            caminho: "Adm. / Financeiro > Contabilidade > Exportação Contábil > Nota Fiscal Paulista / Alagoana CAT-102",
            urlPattern: "nota_fiscal_paulista/nota_paulista_filtro.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Cadastros Auxiliares > Ações Promocionais",
            urlPattern: "produtos/cad_auxiliares/acao_promocional_list.asp",
            manual: ""
        },
        {
            caminho: "Suprimentos > Estoque > Relatórios > Transferência entre Depósitos",
            urlPattern: "produtos/relatorio_transferencia_depositos.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Orçamento/Pedido > Alteração de Endereço de Entrega/Observações",
            urlPattern: "faturamento/orcamento/alterarEnderecoEntregaEObservacoes.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Metas > Cadastro de Metas",
            urlPattern: "faturamento/metas/cadastros/cadastro_metas.html",
            manual: ""
        },
        {
            caminho: "Faturamento > Metas > Configuração de Metas",
            urlPattern: "faturamento/metas/configuracao/configuracao_metas.asp",
            manual: ""
        },
        {
            caminho: "Faturamento > Metas > Relatórios > Relatório de Metas de Vendas",
            urlPattern: "faturamento/metas/relatorios/relatorio_metas_vendas.asp",
            manual: ""
        },
        {
            caminho: "Reshop > Acessar",
            urlPattern: "faturamento/reshop/acesso_menu_integracao_reshop.asp",
            manual: ""
        },
        {
            caminho: "Administrativo > Dados da Empresa",
            urlPattern: "dados_empresa.asp",
            manual: ""
        },
        {
            caminho: "Administrativo > Usuários",
            urlPattern: "usuarios/index_usuarios.asp",
            manual: ""
        },
        {
            caminho: "Administrativo > Parâmetros Globais",
            urlPattern: "parametros/indice_param_globais.asp",
            manual: ""
        },
        {
            caminho: "Cadastros > Produtos ",
            urlPattern: "suprimentos/index.html#/listagem-produtos",
            manual: ""
        },
        {
            caminho: "Cadastros > Serviços",
            urlPattern: "webapp/acesso.asp?appRoute=CadastroServicos/ListagemServicos",
            manual: ""
        },
        {
            caminho: "Cadastros > CNAE",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=CNAE/Listagem&appPermissao=listagem_cnae_permissao",
            manual: ""
        },
        {
            caminho: "Cadastros > Pacotes",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=CadastroPacotes/ListagemPacotes&appPermissao=listagem_pacotes_permissao",
            manual: ""
        },
        {
            caminho: "Cadastros > Clientes e Fornecedores",
            urlPattern: "crm/webapp/clientes/listagem/index.html",
            manual: ""
        },
        {
            caminho: "Cadastros > Bem-Estar > Equipamentos (Novo)",
            urlPattern: "webapp/acesso.asp?appRoute=cadastro-equipamento/cadastro-equipamentos",
            manual: ""
        },
        {
            caminho: "Cadastros > Bem-Estar > Formulários (Novo)",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=/CadastroFormularios/ListagemFormularios&appPermissao=formularios_permissao",
            manual: ""
        },
        {
            caminho: "Cadastros > Bem-Estar > Espaços (Novo)",
            urlPattern: "webapp/acesso.asp?appRoute=CadastroEspaco/CadastroEspacos",
            manual: ""
        },
        {
            caminho: "Cadastros > Bem-Estar > Contratos",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=CadastroContratos/ListagemContrato&appPermissao=contratos_permissao",
            manual: ""
        },
        {
            caminho: "Cadastros > Contábil > Operações Padrões",
            urlPattern: "financeiro/contabilidade/operacoes_contab.asp",
            manual: ""
        },
        {
            caminho: "Cadastros > Contábil > Plano de Contas",
            urlPattern: "financeiro/contabilidade/plano_contas/listagem_plano_contas.html",
            manual: ""
        },
        {
            caminho: "Cadastros > Contábil > Históricos",
            urlPattern: "financeiro/contabilidade/cadastro_contab_historicos.asp",
            manual: ""
        },
        {
            caminho: "Cadastros > Contábil > Centros de custo",
            urlPattern: "financeiro/contabilidade/cad_auxiliares/cadastro_centrocusto.asp",
            manual: ""
        },
        {
            caminho: "Cadastros > Promoções > Ações Promocionais",
            urlPattern: "produtos/cad_auxiliares/acao_promocional_list.asp",
            manual: ""
        },
        {
            caminho: "Cadastros > Promoções > Cadastro de Campanhas (Novo)",
            urlPattern: "webapp/acesso.asp?appRoute=promocoes/campanha",
            manual: ""
        },
        {
            caminho: "Cadastros > Promoções > Cadastro de Promoções (Novo)",
            urlPattern: "webapp/acesso.asp?appRoute=promocoes/promocao",
            manual: ""
        },
        {
            caminho: "Cadastros > Promoções > Cadastro de Promoções (por Referência) ",
            urlPattern: "produtos/formulario_cadastro_promocao.asp?cadastra_promocao_por_referencia=S",
            manual: ""
        },
        {
            caminho: "Cadastros > Promoções > Desabilitar Promoções",
            urlPattern: "produtos/desabilitar_promocao_referencia.asp",
            manual: ""
        },
        {
            caminho: "Cadastros > Promoções > Relatórios > Lista de Promoções",
            urlPattern: "produtos/cadastro_promocao.asp",
            manual: ""
        },
        {
            caminho: "Cadastros > Promoções > Relatórios > Produtos em Promoção",
            urlPattern: "produtos/relatorio_produtos_promocao.asp",
            manual: ""
        },
        {
            caminho: "Cadastros > Operações > Vendedores/Compradores ",
            urlPattern: "faturamento/cadastro_vendedores/index.html",
            manual: ""
        },
        {
            caminho: "Cadastros > Operações > Planos de Pagamento",
            urlPattern: "faturamento/cad_auxiliares/cadastro_de_plano.asp",
            manual: ""
        },
        {
            caminho: "Cadastros > Operações > TEF: Configuração de Pagamentos",
            urlPattern: "faturamento/configurar_pagamentos/index.html",
            manual: ""
        },
        {
            caminho: "Cadastros > Operações > Tabela de preço (Novo)",
            urlPattern: "suprimentos/index.html#/tabelas-precos",
            manual: ""
        },
        {
            caminho: "Cadastros > Operações > Série Própria",
            urlPattern: "faturamento/cad_auxiliares/cadastro_serie.asp",
            manual: ""
        },
        {
            caminho: "Cadastros > Operações > Série Entrada",
            urlPattern: "produtos/cad_auxiliares/serie_entrada_cadastro.asp",
            manual: ""
        },
        {
            caminho: "Cadastros > Operações > Natureza de Operação",
            urlPattern: "faturamento/cad_auxiliares/cadastro_cfop.asp",
            manual: ""
        },
        {
            caminho: "Cadastros > Operações > Depósito",
            urlPattern: "produtos/cad_auxiliares/depositos_cadastro.asp",
            manual: ""
        },
        {
            caminho: "Cadastros > Operações > Config. Tributária",
            urlPattern: "produtos/cad_auxiliares/configuracao_tributaria.asp",
            manual: ""
        },
        {
            caminho: "Cadastros > Operações > Config. Tributária (Novo)",
            urlPattern: "fiscal/configuracao-tributaria/index.html#",
            manual: ""
        },
        {
            caminho: "Cadastros > Operações > Unidade",
            urlPattern: "produtos/cad_auxiliares/unidade_cadastro.asp",
            manual: ""
        },
        {
            caminho: "Cadastros > Operações > NCM/CEST > NCM",
            urlPattern: "produtos/cad_auxiliares/cadastro_ncm.asp",
            manual: ""
        },
        {
            caminho: "Cadastros > Operações > NCM/CEST > CEST",
            urlPattern: "produtos/cad_auxiliares/cest/views/cest.asp",
            manual: ""
        },
        {
            caminho: "Cadastros > Operações > Tabelas de Comissão",
            urlPattern: "faturamento/cad_auxiliares/tabelas_comissoes.asp",
            manual: ""
        },
        {
            caminho: "Cadastros > Operações > Motivo de Devolução",
            urlPattern: "faturamento/cad_auxiliares/cadastro_motivo_devolucao.asp",
            manual: ""
        },
        {
            caminho: "Cadastros > Operações > Observações Padrões",
            urlPattern: "faturamento/cad_auxiliares/cadastro_observacoes_padroes.asp",
            manual: ""
        },
        {
            caminho: "Cadastros > Operações > Cupons de Desconto",
            urlPattern: "faturamento/cadastro_cupom/index.html",
            manual: ""
        },
        {
            caminho: "Cadastros > Operações > Regras por CFOP",
            urlPattern: "fiscal/regras-cfop-operacao/listagem/listagem-regras-cfop.html",
            manual: ""
        },
        {
            caminho: "Cadastros > Operações > Registros dos Campos Adicionais",
            urlPattern: "produtos/cad_auxiliares/registros_campos_adicionais.asp",
            manual: ""
        },
        {
            caminho: "Cadastros > CRM > Classes de Clientes",
            urlPattern: "clientes/cad_auxiliares/classe_cadastro.asp",
            manual: ""
        },
        {
            caminho: "Cadastros > CRM > Grupos Empresariais",
            urlPattern: "clientes/cad_auxiliares/cadastro_grupo_clientes.asp",
            manual: ""
        },
        {
            caminho: "Operações > Venda Fácil",
            urlPattern: "faturamento/vendafacil/acesso_webapp.asp",
            manual: ""
        },
        {
            caminho: "Operações > Remessas e Retornos",
            urlPattern: "fiscal/remessa-retorno/index.html",
            manual: ""
        },
        {
            caminho: "Operações > Entradas e Retornos",
            urlPattern: "fiscal/entrada-retorno/index.html",
            manual: ""
        },
        {
            caminho: "Operações > Baixa de Consumo",
            urlPattern: "produtos/baixa_consumo.asp",
            manual: ""
        },
        {
            caminho: "Operações > Devolução de Venda ",
            urlPattern: "faturamento/cadastro_nota_fiscal.asp?sub_rotina=devolucao_venda",
            manual: ""
        },
        {
            caminho: "Operações > Entrada XML (NF-e)",
            urlPattern: "produtos/entrada_nfe/index.html",
            manual: ""
        },
        {
            caminho: "Operações > Recebimento de Compras",
            urlPattern: "produtos/recebimento_mercadorias/compras/index.html",
            manual: ""
        },
        {
            caminho: "Operações > Recebimento de Transferência",
            urlPattern: "produtos/recebimento_mercadorias/transferencias/index.html",
            manual: ""
        },
        {
            caminho: "Operações > Troca Fácil",
            urlPattern: "faturamento/vendafacil/acesso_webapptrocafacil.asp?rota=trocafacilerppos&ignoraConfiguracao=1",
            manual: ""
        },
        {
            caminho: "Operações > Devolução de Compra Fácil",
            urlPattern: "suprimentos/estoque/devolucao-entrada/index.html",
            manual: ""
        },
        {
            caminho: "Operações > Crediário > Ficha do cliente",
            urlPattern: "faturamento/vendafacil/acesso_webapp.asp?rota=ErpFichaClienteCrediario&ignoraConfiguracao=1",
            manual: ""
        },
        {
            caminho: "Operações > Crediário > Recebimento de parcelas",
            urlPattern: "faturamento/vendafacil/acesso_webapp.asp?rota=ErpRecebimentoParcelasCrediario&ignoraConfiguracao=1",
            manual: ""
        },
        {
            caminho: "Operações > Crediário > Configurações",
            urlPattern: "faturamento/crediario/index.html",
            manual: ""
        },
        {
            caminho: "Operações > Fiscal > Sintegra > Geração Arquivo",
            urlPattern: "financeiro/carrega_gerador_arquivo.asp?tipoArquivo=Sintegra",
            manual: ""
        },
        {
            caminho: "Operações > Fiscal > Sintegra > Manutenção",
            urlPattern: "financeiro/carrega_gerador_arquivo.asp?tipoArquivo=Sintegra",
            manual: ""
        },
        {
            caminho: "Operações > Fiscal > Cadastro de sangrias/suprimentos",
            urlPattern: "faturamento/vendafacil/acesso_webapp.asp?rota=menufiscalerp&ignoraConfiguracao=1",
            manual: ""
        },
        {
            caminho: "Operações > Fiscal > Relatório de sangrias/suprimentos",
            urlPattern: "webapp/acesso.asp?appRoute=/rotinasFiscais/listagem",
            manual: ""
        },
        {
            caminho: "Operações > Fiscal > Exportação Fiscal > Ressarcimento/Restituição/Complemento de ICMS-ST",
            urlPattern: "fiscal/ressarcimento-icms-st/ressarcimento-icms-st.html",
            manual: ""
        },
        {
            caminho: "Operações > Fiscal > Exportação Fiscal > DIEF-PA",
            urlPattern: "webapp/acesso.asp?appRoute=dief-pa",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Pedido de compra > Gerar Pedido (manual)",
            urlPattern: "compras/cadastra_pedido.asp",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Pedido de compra > Gerar Pedido (grade)",
            urlPattern: "compras/pedido_grade_cadastro.asp",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Pedido de compra > Gerar Pedido (automático)",
            urlPattern: "compras/relatorio_faltas.asp",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Pedido de compra > Aprovar Pedido",
            urlPattern: "compras/pedido_aprovacao.asp",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Pedido de compra > Alterar/Cancelar Pedido",
            urlPattern: "compras/altera_pedido.asp",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Pedido de compra > Relatório",
            urlPattern: "compras/relatorio_pedidos.asp",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Requisição de Compra > Nova Requisição",
            urlPattern: "compras/produtos_requisicao.asp",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Requisição de Compra > Conferência Requisição",
            urlPattern: "compras/requisicao_conferencia.asp",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Requisição de Compra > Listagem de Requisições",
            urlPattern: "compras/requisicao_filtro.asp",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Requisição de Compra > Cancelar/Excluir Requisição",
            urlPattern: "compras/cancela_requisicao.asp",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Entrada Manual",
            urlPattern: "produtos/entrada_compras.asp",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Entrada CT-e ",
            urlPattern: "suprimentos/index.html#/entrada-cte/painel-entrada-cte",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Devolução de venda",
            urlPattern: "faturamento/cadastro_nota_fiscal.asp?sub_rotina=devolucao_venda",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Devolução de compra",
            urlPattern: "faturamento/cadastro_nota_fiscal.asp?sub_rotina=devolucao_compra",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Entrada de Operação em Recusa",
            urlPattern: "fiscal/recusa-nf/recusa-nf.html",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Cancelar Nota de Entrada",
            urlPattern: "produtos/entrada_compras.asp?esconde_itens=S",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Cancelar/Excluir Nota Fiscal Saída",
            urlPattern: "faturamento/cadastro_nota_fiscal.asp?sub_rotina=cancelar_excluir_nota_fiscal",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Substitutiva de Cupom Fiscal SAT ou NFC-e",
            urlPattern: "faturamento/cadastro_nota_fiscal.asp?sub_rotina=nota_fiscal_substitutiva_cupom_sat_nfce",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Transferência entre Depósitos",
            urlPattern: "faturamento/transf/transf_depositos.asp",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Manutenção de Produtos",
            urlPattern: "produtos/relatorio_manut.asp",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Gestão NF-e (XML)",
            urlPattern: "nf_e/nfe.asp",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Gestão NFC-e/SAT (XML) ",
            urlPattern: "sat/sat.asp",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Balanço (Novo)",
            urlPattern: "suprimentos/estoque/balanco/index.html",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Balanço > Enviar arquivo",
            urlPattern: "produtos/balanco/envia_balanco.asp",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Balanço > Balanço direto",
            urlPattern: "produtos/balanco/balanco_direto.asp",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Balanço > Processar balanço",
            urlPattern: "produtos/balanco/relatorio_balanco.asp",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Balanço > Consultar balanço",
            urlPattern: "produtos/balanco/consulta_balancos.asp",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Balanço > Estornar balanço",
            urlPattern: "produtos/balanco/desfazer_balanco.asp",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Transferências > Conferência de Transferências",
            urlPattern: "produtos/transferencia/conferencia_listagem.asp",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Transferências > Endosso de Transferências",
            urlPattern: "produtos/transferencia/endosso_intermediaria.asp",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Tipos de Registro Profissional",
            urlPattern: "crm/cadastro_auxiliar/tipo_registro_profissional/index.html",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Lançar Comissão Manual",
            urlPattern: "faturamento/comissoes/adicionar_comissao.asp?operacao=I",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Metas > Cadastro de Metas",
            urlPattern: "faturamento/metas/cadastros/cadastro_metas.html",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Metas > Configuração de Metas",
            urlPattern: "faturamento/metas/configuracao/configuracao_metas.asp",
            manual: ""
        },
        {
            caminho: "Operações > Outras Operações > Metas > Relatórios > Relatório de Metas de Vendas",
            urlPattern: "faturamento/metas/relatorios/relatorio_metas_vendas.asp",
            manual: ""
        },
        {
            caminho: "Integração > Hub Marketplaces > Configurações (Novo)",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=hubMarketplace/configuracoes&appPermissao=hubIntegracao_configuracoes_permissao",
            manual: ""
        },
        {
            caminho: "Integração > Hub Marketplaces > Plugg.To (Novo)",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=/hubMarketplace/acessarPluggto&appPermissao=hubIntegracao_acessarPluggto_permissao",
            manual: ""
        },
        {
            caminho: "Integração > Manutenção de produtos B2C",
            urlPattern: "webapp/acesso.asp?appRoute=produtos/manutencao-produtos-b2c",
            manual: ""
        },
        {
            caminho: "Contábil > Livro Razão",
            urlPattern: "financeiro/contabilidade/relatorios/livro_razao/index.html",
            manual: ""
        },
        {
            caminho: "Contábil > DRE - Demonstração do Resultado do Exercício",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=dre/relatorio&appPermissao=dre_permissao",
            manual: ""
        },
        {
            caminho: "Contábil > Balanço Patrimonial",
            urlPattern: "financeiro/contabilidade/relatorios/balanco_patrimonial/index.html",
            manual: ""
        },
        {
            caminho: "Contábil > Balancete",
            urlPattern: "financeiro/contabilidade/relatorios/balancete/index.html",
            manual: ""
        },
        {
            caminho: "Contábil > Zeramento",
            urlPattern: "financeiro/contabilidade/zeramento_contabil/index.html",
            manual: ""
        },
        {
            caminho: "Contábil > Previsão de Despesas Fixas > Cadastro de Previsão de despesas",
            urlPattern: "financeiro/previsoes/previsoes_cadastro.asp",
            manual: ""
        },
        {
            caminho: "Contábil > Previsão de Despesas Fixas > Efetivação de Previsão de despesas",
            urlPattern: "financeiro/previsoes/previsoes_cadastro_efetivar.asp",
            manual: ""
        },
        {
            caminho: "Financeiro > Pagamentos > Lançar Pagamento",
            urlPattern: "financeiro/lancamento_receber_pagar.asp?mais_contas_debitos=S",
            manual: ""
        },
        {
            caminho: "Financeiro > Pagamentos > Alterar/Excluir Pagamento",
            urlPattern: "financeiro/altera_faturas.asp?mais_contas_debitos=S",
            manual: ""
        },
        {
            caminho: "Financeiro > Pagamentos > Baixar Pagamento",
            urlPattern: "financeiro/baixa_faturas.asp?ParametroParaFavoritos=pagar",
            manual: ""
        },
        {
            caminho: "Financeiro > Pagamentos > Estornar Pagamento",
            urlPattern: "financeiro/extorno_faturas.asp?tipo_lanc=pagar",
            manual: ""
        },
        {
            caminho: "Financeiro > Pagamentos > Importar Faturas ",
            urlPattern: "financeiro/importacao_de_faturas_novo/index.html#/importacao-faturas/2",
            manual: ""
        },
        {
            caminho: "Financeiro > Recebimentos > Lançar Faturas",
            urlPattern: "financeiro/lancamento_receber_pagar.asp?tipolanc=receber",
            manual: ""
        },
        {
            caminho: "Financeiro > Recebimentos > Alterar/Excluir Faturas",
            urlPattern: "financeiro/altera_faturas.asp?tipolanc=receber",
            manual: ""
        },
        {
            caminho: "Financeiro > Recebimentos > Baixar Faturas",
            urlPattern: "financeiro/baixa_faturas.asp?tipolanc=receber",
            manual: ""
        },
        {
            caminho: "Financeiro > Recebimentos > Boletos Stone (Novo)",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=openbanking/boletos&appPermissao=open_banking_permissao_boletos",
            manual: ""
        },
        {
            caminho: "Financeiro > Recebimentos > Estornar Faturas",
            urlPattern: "financeiro/extorno_faturas.asp?tipolanc=receber",
            manual: ""
        },
        {
            caminho: "Financeiro > Recebimentos > Importar Faturas ",
            urlPattern: "financeiro/importacao_de_faturas_novo/index.html#/importacao-faturas/1",
            manual: ""
        },
        {
            caminho: "Financeiro > Caixa > Fechar",
            urlPattern: "vendas/caixa/fechamento_caixa.asp",
            manual: ""
        },
        {
            caminho: "Financeiro > Caixa > Conferir",
            urlPattern: "faturamento/relatorio_conferencia_caixa.asp",
            manual: ""
        },
        {
            caminho: "Financeiro > Caixa > Listar",
            urlPattern: "faturamento/relatorio_fechamento_caixa.asp",
            manual: ""
        },
        {
            caminho: "Financeiro > Fluxo de Caixa",
            urlPattern: "financeiro/tesouraria/fluxo_caixa/index.html",
            manual: ""
        },
        {
            caminho: "Financeiro > Conciliador Bancário",
            urlPattern: "financeiro/tesouraria/conciliador_bancario/selecao_contas/index.html",
            manual: ""
        },
        {
            caminho: "Financeiro > Transferência entre Contas",
            urlPattern: "financeiro/tesouraria/transferencias_entre_contas/transferencia_entre_contas.asp",
            manual: ""
        },
        {
            caminho: "Financeiro > Gestão Financeira (Novo)",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=/gestao-financeira/calendario&appPermissao=gestao_financeira_permissao",
            manual: ""
        },
        {
            caminho: "Conta Digital (Stone Banking) > Iniciar Conta Digital",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=openbanking&appPermissao=open_banking_permissao",
            manual: ""
        },
        {
            caminho: "Relatórios > Gerador de Relatórios",
            urlPattern: "gerador_de_relatorios/fonte_de_dados/index.html",
            manual: ""
        },
        {
            caminho: "Relatórios > CRM > Relatório Cliente/Fornecedor",
            urlPattern: "clientes/relatorio_de_clientes.asp",
            manual: ""
        },
        {
            caminho: "Relatórios > Bem-Estar > Saldo de Serviços (Novo)",
            urlPattern: "webapp/acesso.asp?appRoute=RelatorioSaldoServicos",
            manual: ""
        },
        {
            caminho: "Relatórios > Bem-Estar > Equipamentos  (Novo)",
            urlPattern: "webapp/acesso.asp?appRoute=cadastro-equipamento/cadastro-equipamentos",
            manual: ""
        },
        {
            caminho: "Relatórios > Bem-Estar > Agendamentos (Novo)",
            urlPattern: "webapp/acesso.asp?appRoute=relatorioAgendamentos",
            manual: ""
        },
        {
            caminho: "Relatórios > Bem-Estar > Logs de Serviços (Novo)",
            urlPattern: "webapp/acesso.asp?appRoute=relatorioLog",
            manual: ""
        },
        {
            caminho: "Relatórios > Bem-Estar > Serviços Vendidos (Novo)",
            urlPattern: "webapp/acesso.asp?appRoute=/relatorioServicosVendidos",
            manual: ""
        },
        {
            caminho: "Relatórios > Troca Fácil > Relatório de Vale Troca",
            urlPattern: "faturamento/troca_unificada/relatorio_vale_trocas/index.html",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão de Vendas > Faturamento Diário",
            urlPattern: "faturamento/relat_fat_diario.asp",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão de Vendas > Movimento Diário",
            urlPattern: "faturamento/relatorio_diario.asp",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão de Vendas > Relatório de Vendas/Motivos Desconto (Novo)",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=relatorios/motivo-desconto&appPermissao=motivos_desconto_permissao",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão de Vendas > Faturamento Vendedor",
            urlPattern: "faturamento/relatorio_fat_vendedor.asp",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão de Vendas > Produtos/Serv.Vendidos",
            urlPattern: "faturamento/relatorio_prod_vendidos.asp?ajusteMenu=S",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão de Vendas > Ranking de Clientes",
            urlPattern: "faturamento/relatorio_ranking.asp",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão de Vendas > Ranking por Produtos",
            urlPattern: "faturamento/relatorio_ranking_produtos.asp",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão de Vendas > Vendas por Lojas",
            urlPattern: "faturamento/relatorio_vendas_lojas.asp",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão de Vendas > Relatório de Comissões",
            urlPattern: "faturamento/comissoes/relat_comissoes.asp",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão de Vendas > Relatório de Metas de Vendas",
            urlPattern: "faturamento/metas/relatorios/relatorio_metas_vendas.asp",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão de Estoque > Notas de Compra",
            urlPattern: "produtos/relatorio_notas.asp?modulo=estoque",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão de Estoque > Lista de Preços",
            urlPattern: "produtos/relatorio_lista_precos.asp",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão de Estoque > Registro de Inventário",
            urlPattern: "produtos/relatorio_inventario_new.asp",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão de Estoque > Histórico Movimento",
            urlPattern: "produtos/relatorio_movimento_produto.asp",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão de Estoque > Produtos Cadastrados",
            urlPattern: "produtos/relatorio_produtos.asp",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão de Estoque > Compras/Vendas e Saldo por Empresa",
            urlPattern: "produtos/relatorio_compra_venda_saldo_empresa.asp",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão de Estoque > Relatório de Giro Médio",
            urlPattern: "compras/relat_curva_abc_giro_medio.asp",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão de Estoque > Relatório de Cobertura",
            urlPattern: "compras/relat_curva_abc_cobertura_novo.asp",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão de Estoque > Saldo em estoque por Grade",
            urlPattern: "produtos/relatorio_prod_estoque.asp",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão de Estoque > Relatório de Consulta de Lotes",
            urlPattern: "produtos/relatorio_lotes.asp",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão de Estoque > Saldo em Estoque",
            urlPattern: "produtos/relatorio_saldos.asp",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão de Estoque > Saldo por Empresa",
            urlPattern: "produtos/relatorio_saldo_por_empresa.asp",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão de Estoque > Curva ABC",
            urlPattern: "compras/relatorio_abc.asp",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão de Estoque > Recebimento de Mercadorias",
            urlPattern: "produtos/recebimento_mercadorias/relatorio/index.html?limparCache=1",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão de Estoque > Etiquetas Codebar",
            urlPattern: "produtos/etiquetas_por_item.asp",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão de Estoque > Transferência entre Depósitos",
            urlPattern: "produtos/relatorio_transferencia_depositos.asp",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão de Estoque > Detalhamento de Custos",
            urlPattern: "produtos/relatorio_custo_por_nota.asp",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão Financeira > Recebimentos > Relatório de Pré-Venda",
            urlPattern: "webapp/acesso.asp?appRoute=relatorios/pre-venda",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão Financeira > Recebimentos > Faturas a Receber",
            urlPattern: "financeiro/relatorio_faturas_periodo.asp?tipolanc=receber&filtro_adm_cartao=S&lancamento=S",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão Financeira > Recebimentos > Faturas Recebidas",
            urlPattern: "financeiro/relatorio_faturas_periodo_recebidas.asp?tipolanc=receber&filtro_adm_cartao=S&lancamento=S",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão Financeira > Pagamentos > Faturas a Pagar",
            urlPattern: "financeiro/relatorio_faturas_periodo.asp?ParametroParaFavoritos=pagar",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão Financeira > Pagamentos > Faturas Pagas",
            urlPattern: "financeiro/relatorio_faturas_periodo_recebidas.asp?ParametroParaFavoritos=pagar",
            manual: ""
        },
        {
            caminho: "Relatórios > Gestão Financeira > Tesouraria > Conta corrente",
            urlPattern: "financeiro/tesouraria/relatorio_conta_corrente.asp",
            manual: ""
        },
        {
            caminho: "Report Viewer > Iniciar Report Viewer",
            urlPattern: "abrir_sessao_aspx.asp?target=_blank&url=https%3A%2F%2Freportviewer%2Drc%2Emicrovix%2Ecom%2Ebr%2Fviews%2Flogin%2Easpx",
            manual: ""
        },
        {
            caminho: "Adicionais > Scarf",
            urlPattern: "framework/scarf/sobre.asp",
            manual: ""
        },
        {
            caminho: "Bem-Estar > Agenda  (Novo)",
            urlPattern: "servicos/agenda/index.asp",
            manual: ""
        },
        {
            caminho: "Bem-Estar > Agendamento Online (Novo)",
            urlPattern: "webapp/acesso_permissao.asp?appRoute=configuracaoAgendamentoOnline&appPermissao=agendaonline_permissao",
            manual: ""
        }
];