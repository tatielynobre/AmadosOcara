import React, { useState } from 'react';
import TransparenciaHeader from './TransparenciaHeader';
import FiltroBusca from './filtroBusca';
import RelatorioGrid from './RelatorioGrid';
import ModalRelatorio from './modalRelatorio';

export default function TransparenciaPage() {
  const [mesFiltro, setMesFiltro] = useState('');
  const [anoFiltro, setAnoFiltro] = useState('');
  const [modalAberto, setModalAberto] = useState(false);
  const [relatorioSelecionado, setRelatorioSelecionado] = useState(null);

  const abrirModal = (mesAno) => {
    setRelatorioSelecionado(mesAno);
    setModalAberto(true);
  };
  const fecharModal = () => {
    setModalAberto(false);
    setRelatorioSelecionado(null);
  };

  return (
    <>
      <TransparenciaHeader />
      <FiltroBusca
        mes={mesFiltro}
        ano={anoFiltro}
        onMesChange={setMesFiltro}
        onAnoChange={setAnoFiltro}
      />
      <RelatorioGrid
        mesFiltro={mesFiltro}
        anoFiltro={anoFiltro}
        onCardClick={abrirModal}
      />
      {modalAberto && (
        <ModalRelatorio mesAno={relatorioSelecionado} onClose={fecharModal} />
      )}
    </>
  );
} 