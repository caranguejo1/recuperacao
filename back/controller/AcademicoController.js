import Academico from "../model/AcademicoModel.js";

async function listar(req, res) {
    const respostaBanco = await Academico.findAll();
    res.json(respostaBanco);
}

async function selecionar(req, res) {
    const id = req.params.id;
    const respostaBanco = await Academico.findByPk(id);
    res.json(respostaBanco);
}

async function inserir(req, res) {
    const nomeacademico = req.body.nomeacademico;
    const email = req.body.email;
    const nota1 = req.body.nota1;
    const nota2 = req.body.nota2;
    const nota3 = req.body.nota3;
    const media = req.body.media;
    const situacao = req.body.situacao;
    const iddisciplina = req.body.iddisciplina;
    const respostaBanco = await Academico.create({ nomeacademico, email });
    res.json(respostaBanco);
}

async function alterar(req, res) {
    const idacademico = req.params.id;
    const nomeacademico = req.body.nomeacademico;
    const email = req.body.email;
    const nota1 = req.body.nota1;
    const nota2 = req.body.nota2;
    const nota3 = req.body.nota3;
    const media = req.body.media;
    const situacao = req.body.situacao;
    const iddisciplina = req.body.iddisciplina;
    const respostaBanco = await Academico.update(
        { nomeacademico, email, nota1, nota2, nota3, media, situacao, iddisciplina },
        { where: { idacademico } });
    res.json(respostaBanco);
}

async function excluir(req, res) {
    const idacademico = req.params.id;
    const respostaBanco = await Academico.destroy({ where: { idacademico } });
    res.json(respostaBanco);
}

export default { listar, selecionar, inserir, alterar, excluir };