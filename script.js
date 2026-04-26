// =============================================================
//  SAKKA 作家 — Language Switcher + Carousel + Legal Panel
//  ES Module — Vite compatible
//  DOM is guaranteed ready (modules are deferred by spec)
// =============================================================

// ---- Language state ----
let currentLang = 'es';

// ---- Carousel translation data (5 slides × ES + JP) ----
const carouselData = {
    es: [
        {
            label: 'CASO DE ESTUDIO // DESPACHO CONTABLE',
            title: '"MI EQUIPO NO SABE CÓMO DAR DE ALTA UN EMPLEADO"',
            beforeTag: '[ ANTES: CAOS OPERATIVO ]',
            beforeIntro: 'El área de nómina de un despacho contable dependía de la memoria de la supervisora y de 4 correos electrónicos reenviados. Cuando un nuevo cliente mandaba altas al IMSS:',
            beforeItems: [
                'Se enviaba la info incompleta vía WhatsApp.',
                'El practicante la capturaba pero siempre olvidaba pedir el aviso de retención de Infonavit.',
                'El cálculo de nómina salía mal en la primera quincena y el cliente final se quejaba.'
            ],
            afterTag: '[ DESPUÉS: LA SOLUCIÓN SAKKA 作家 ]',
            afterIntro: 'En 10 días mapeamos y centralizamos el proceso en un entregable claro:',
            afterItems: [
                '<strong>Checklist cliente:</strong> Nadie inicia el trámite si el cliente no entrega el RFC e Infonavit.',
                '<strong>Responsables fijos:</strong> Asignación clara de pantallas. Cero dependencias ambigüas.',
                '<strong>Guía visual del IDSE:</strong> Capturas de pantalla actualizadas para que el practicante copie/pegue sin preguntarle a la supervisora.'
            ],
            result: '<strong>Resultado:</strong> Las altas de nómina disminuyeron de 3 horas de validación a 20 minutos de ejecución autónoma. Los errores del IDSE se redujeron a <strong style="color:#14120b;border-bottom:2px solid #bda36e;">cero</strong>.'
        },
        {
            label: 'CASO DE ESTUDIO // DESPACHO JURÍDICO',
            title: '"NUESTROS CONTRATOS TIENEN NOMBRES DEL CLIENTE ANTERIOR"',
            beforeTag: '[ ANTES: CAOS OPERATIVO ]',
            beforeIntro: 'Los abogados junior tardaban horas adaptando contratos porque no había una fuente única de verdad:',
            beforeItems: [
                'Buscaban en el servidor un contrato que "se pareciera" y lo sobreescribían.',
                'Olvidaban actualizar anexos y dejaban montos pasados.',
                'El socio revisaba línea por línea, actuando como un corrector de estilo.'
            ],
            afterTag: '[ DESPUÉS: LA SOLUCIÓN SAKKA 作家 ]',
            afterIntro: 'Bloqueamos el posicionamiento de cada área del despacho y centralizamos el conocimiento en una bóveda de cláusulas y plantillas:',
            afterItems: [
                '<strong>Repositorio maestro:</strong> Una sola versión oficial de cada tipo de contrato.',
                '<strong>Checklist de validación:</strong> Pasos obligatorios antes de enviar a firma.',
                '<strong>Árbol de decisiones:</strong> Guía para usar cláusulas restrictivas vs permisivas.'
            ],
            result: '<strong>Resultado:</strong> El tiempo de redacción bajó de 2.5 horas a 15 minutos. El socio ahora solo revisa estrategia legal, reduciendo su carga en un <strong style="color:#14120b;border-bottom:2px solid #bda36e;">80%</strong>.'
        },
        {
            label: 'CASO DE ESTUDIO // CONSULTORÍA FISCAL',
            title: '"TARDAMOS DEMASIADO EN EMITIR UNA OPINIÓN FISCAL"',
            beforeTag: '[ ANTES: CAOS OPERATIVO ]',
            beforeIntro: 'Analizar implicaciones fiscales era un proceso artesanal y altamente dependiente del socio:',
            beforeItems: [
                'Se investigaban desde cero temas ya resueltos meses antes.',
                'Los formatos de entrega variaban enormemente según quién redactaba.',
                'Se perdía tiempo buscando precedentes en correos antiguos.'
            ],
            afterTag: '[ DESPUÉS: LA SOLUCIÓN SAKKA 作家 ]',
            afterIntro: 'Sistematizamos la investigación y entrega de opiniones:',
            afterItems: [
                '<strong>Playbook de investigación:</strong> Fuentes estandarizadas y orden de consulta.',
                '<strong>Base de precedentes internos:</strong> Documentos etiquetados y fáciles de buscar.',
                '<strong>Estructura maestra:</strong> Formato invariable para dar coherencia al despacho.'
            ],
            result: '<strong>Resultado:</strong> El tiempo de respuesta mejoró en 50%. El 80% de la investigación se puede delegar a analistas de forma segura, con un <strong style="color:#14120b;border-bottom:2px solid #bda36e;">margen de ganancia mayor</strong>.'
        },
        {
            label: 'CASO DE ESTUDIO // NOTARÍA PÚBLICA',
            title: '"LA ESCRITURACIÓN SE DETIENE POR FALTA DE DOCUMENTOS"',
            beforeTag: '[ ANTES: CAOS OPERATIVO ]',
            beforeIntro: 'Los trámites inmobiliarios sufrían graves retrasos debido a un inicio accidentado:',
            beforeItems: [
                'Se solicitaban los requisitos vía WhatsApp a medida que el abogado se acordaba.',
                'El día de la firma faltaba el predial actualizado o la identificación.',
                'Firmas reprogramadas, clientes molestos y cuellos de botella.'
            ],
            afterTag: '[ DESPUÉS: LA SOLUCIÓN SAKKA 作家 ]',
            afterIntro: 'Diseñamos un flujo de recopilación infalible y frontal:',
            afterItems: [
                '<strong>Kits de bienvenida:</strong> Un PDF interactivo con todos los requisitos exactos y vigencias.',
                '<strong>Filtro de pre-recepción:</strong> El expediente no pasa a redacción si no está 100% completo.',
                '<strong>Guion de seguimiento:</strong> Mensajes estandarizados para recordar qué falta.'
            ],
            result: '<strong>Resultado:</strong> Relanzamos la operación de firmas; el <strong style="color:#14120b;border-bottom:2px solid #bda36e;">95% de expedientes</strong> llegan completos a la mesa de abogados el primer día.'
        },
        {
            label: 'CASO DE ESTUDIO // FIRMA CONTABLE',
            title: '"EL CIERRE DE MES ES UNA PESADILLA DE HORAS EXTRAS"',
            beforeTag: '[ ANTES: CAOS OPERATIVO ]',
            beforeIntro: 'Los primeros 10 días del mes significaban estrés prolongado y fines de semana trabajando:',
            beforeItems: [
                'Cada contador aplicaba su propio criterio para reclasificar o conciliar cuentas.',
                'Las facturas no cuadraban y revisarlas requería cruzar múltiples sistemas.',
                'Si un contador se enfermaba, otro tardaba días en entender dónde se había quedado.'
            ],
            afterTag: '[ DESPUÉS: LA SOLUCIÓN SAKKA 作家 ]',
            afterIntro: 'Impusimos disciplina estructural al proceso de contabilidad mensual:',
            afterItems: [
                '<strong>SOP de Cierre:</strong> Manual cronológico detallando la conciliación bancaria y depreciación.',
                '<strong>Criterios de Reclasificación:</strong> Matriz que define cómo tratar cada movimiento excepcional.',
                '<strong>Control cruzado:</strong> Lista de verificación que el supervisor audita.'
            ],
            result: '<strong>Resultado:</strong> El cierre se completa <strong style="color:#14120b;border-bottom:2px solid #bda36e;">3 días antes</strong>. La moral del equipo subió drásticamente al eliminar el trabajo en fines de semana.'
        }
    ],
    jp: [
        {
            label: 'ケーススタディ // 会計事務所',
            title: '「チームは従業員の登録方法を知らない」',
            beforeTag: '[ 以前：業務の混乱 ]',
            beforeIntro: 'ある会計事務所の給与部門は、スーパーバイザーの記憶と4通の転送メールに依存していました。新しいクライアントがIMSSへの従業員登録を依頼すると：',
            beforeItems: [
                '不完全な情報がWhatsApp経由で送られていた。',
                'インターンが入力していたが、常にInfonavitの源泉徴収通知書を請求し忘れていた。',
                '最初の給与計算が誤り、クライアントからクレームが入っていた。'
            ],
            afterTag: '[ 以後：SAKKA 作家のソリューション ]',
            afterIntro: '10日間でプロセスをマッピングし、明確な成果物に集約しました：',
            afterItems: [
                '<strong>クライアントチェックリスト：</strong>RFCとInfonavitが揃うまで手続きを開始しない。',
                '<strong>担当者の固定：</strong>画面ごとの明確な担当割り当て。曖昧な依存関係はゼロ。',
                '<strong>IDSEビジュアルガイド：</strong>インターンがスーパーバイザーに聞かずにコピー＆ペーストできる最新スクリーンショット。'
            ],
            result: '<strong>結果：</strong>給与登録作業が3時間の検証から20分の自律実行に短縮。IDSEのエラーは<strong style="color:#14120b;border-bottom:2px solid #bda36e;">ゼロ</strong>に減少。'
        },
        {
            label: 'ケーススタディ // 法律事務所',
            title: '「契約書に前のクライアントの名前が残っている」',
            beforeTag: '[ 以前：業務の混乱 ]',
            beforeIntro: 'ジュニア弁護士は唯一の情報源がなく、契約書の修正に何時間も費やしていました：',
            beforeItems: [
                '「似ている」契約書をサーバー内で探してそのまま上書きしていた。',
                '添付資料の更新を忘れ、古い金額が残っていた。',
                'パートナーが一行一行確認し、文体校正者のようになっていた。'
            ],
            afterTag: '[ 以後：SAKKA 作家のソリューション ]',
            afterIntro: '各部門のポジショニングを確立し、条項・テンプレートの知識を一元化した保管庫に集約しました：',
            afterItems: [
                '<strong>マスターリポジトリ：</strong>契約書の種類ごとに1つの公式バージョン。',
                '<strong>検証チェックリスト：</strong>署名前に必須の確認ステップ。',
                '<strong>意思決定ツリー：</strong>制限的条項と許容的条項の使い分けガイド。'
            ],
            result: '<strong>結果：</strong>作成時間が2.5時間から15分に短縮。パートナーは法的戦略のみを確認し、作業負荷が<strong style="color:#14120b;border-bottom:2px solid #bda36e;">80%</strong>削減。'
        },
        {
            label: 'ケーススタディ // 税務コンサルティング',
            title: '「税務意見書の発行に時間がかかりすぎる」',
            beforeTag: '[ 以前：業務の混乱 ]',
            beforeIntro: '税務上の影響分析は職人的な作業で、パートナーへの依存度が非常に高い状態でした：',
            beforeItems: [
                '数ヶ月前に解決済みのテーマを一から調査していた。',
                '担当者によって成果物のフォーマットが大きく異なっていた。',
                '古いメールから先例を探すのに時間を浪値していた。'
            ],
            afterTag: '[ 以後：SAKKA 作家のソリューション ]',
            afterIntro: '調査・意見書作成プロセスを体系化しました：',
            afterItems: [
                '<strong>調査プレイブック：</strong>標準化された情報源と参照順序。',
                '<strong>社内先例データベース：</strong>タグ付けされた検索しやすい文書。',
                '<strong>マスター構造：</strong>事務所に一貫性をもたらす固定フォーマット。'
            ],
            result: '<strong>結果：</strong>対応時間が50%改善。調査の80%をアナリストに安全に委任でき、<strong style="color:#14120b;border-bottom:2px solid #bda36e;">利益率が向上</strong>。'
        },
        {
            label: 'ケーススタディ // 公証事務所',
            title: '「書類不足で登記手続きが止まる」',
            beforeTag: '[ 以前：業務の混乱 ]',
            beforeIntro: '不動産手続きは不完全なスタートにより深刻な遅延に見舞われていました：',
            beforeItems: [
                '弁護士が思い出すたびにWhatsApp経由で書類を要求していた。',
                '署名当日に最新の固定資産税証明書や身分証明書が不足していた。',
                '署名の再スケジュール、クライアントの不満、業務のボトルネック。'
            ],
            afterTag: '[ 以後：SAKKA 作家のソリューション ]',
            afterIntro: '確実かつ事前完結型の書類収集フローを設計しました：',
            afterItems: [
                '<strong>ウェルカムキット：</strong>正確な要件と有効期限を記載したインタラクティブPDF。',
                '<strong>受付前フィルター：</strong>書類が100%揃わなければ作成段階に進まない。',
                '<strong>フォローアップスクリプト：</strong>不足書類を通知する標準化メッセージ。'
            ],
            result: '<strong>結果：</strong>署名業務を再始動。<strong style="color:#14120b;border-bottom:2px solid #bda36e;">書類の95%</strong>が初日に完全な状態で弁護士の机に届く。'
        },
        {
            label: 'ケーススタディ // 会計法人',
            title: '「月次決算は残業地獄だ」',
            beforeTag: '[ 以前：業務の混乱 ]',
            beforeIntro: '月初の10日間は長期ストレスと週末出勤を意味していました：',
            beforeItems: [
                '担当者ごとに勘定科目の組み替えや調整の基準が異なっていた。',
                '請求書が合わず、複数のシステムをまたいで確認する必要があった。',
                '担当者が病欠すると、引き継ぎ者が状況を把握するのに数日かかっていた。'
            ],
            afterTag: '[ 以後：SAKKA 作家のソリューション ]',
            afterIntro: '月次会計プロセスに構造的な規律を導入しました：',
            afterItems: [
                '<strong>決算SOP：</strong>銀行調整と減価償却を詳述した時系列マニュアル。',
                '<strong>再分類基準：</strong>例外的な取引の処理方法を定義するマトリクス。',
                '<strong>相互チェック：</strong>スーパーバイザーが監査するチェックリスト。'
            ],
            result: '<strong>結果：</strong>決算が<strong style="color:#14120b;border-bottom:2px solid #bda36e;">3日早く</strong>完了。週末出勤がなくなりチームの士気が大幅に向上。'
        }
    ]
};

// ---- Legal panel content (ES + JP) ----
const legalData = {
    es: {
        aviso: {
            title: 'AVISO DE PRIVACIDAD',
            html: `<div style="font-family:'Inter',sans-serif">
<p style="margin-bottom:24px;font-weight:500">Esta página explica cómo SAKKA 作家 recopila, utiliza, comparte y protege su información al usar nuestros servicios.</p>
<p style="margin-bottom:24px">Sakka &amp; Co. inc se compromete a mantener sólidas protecciones de privacidad para sus clientes en el ámbito de la documentación operativa para despachos profesionales.</p>
<h3 style="color:#fff;font-size:18px;margin-top:24px;margin-bottom:12px">1. Información que recopilamos</h3>
<p style="margin-bottom:16px">Recopilamos Información No Personal (datos anónimos de uso, URL de referencia) e Información Personal (correo, nombre, datos del despacho) enviada a través de formularios del sitio.</p>
<h3 style="color:#fff;font-size:18px;margin-top:24px;margin-bottom:12px">2. Cómo utilizamos y compartimos la información</h3>
<p style="margin-bottom:16px">No vendemos ni compartimos su Información Personal con fines de marketing sin su consentimiento explícito.</p>
<h3 style="color:#fff;font-size:18px;margin-top:24px;margin-bottom:12px">3. Cómo protegemos su información</h3>
<p style="margin-bottom:16px">Implementamos cifrado y tecnología SSL para proteger su información institucional contra el acceso no autorizado.</p>
<h3 style="color:#fff;font-size:18px;margin-top:24px;margin-bottom:12px">4. Cambios y Contacto</h3>
<p style="margin-bottom:16px">Sakka &amp; Co. inc se reserva el derecho de modificar esta Política. Escríbanos a <a href="mailto:hola@manova.mx" style="color:#bda36e;text-decoration:underline">hola@manova.mx</a>.</p>
</div>`
        },
        terminos: {
            title: 'TÉRMINOS DE SERVICIO',
            html: `<div style="font-family:'Inter',sans-serif">
<p style="margin-bottom:24px;font-weight:500">Estos términos rigen su uso del sitio web de Sakka &amp; Co. inc y los entregables de documentación operativa.</p>
<p style="margin-bottom:24px">Al acceder o usar el Sitio, usted acepta estos Términos en su nombre o en el de la entidad que representa.</p>
<h3 style="color:#fff;font-size:18px;margin-top:24px;margin-bottom:12px">1. Acceso al Sitio</h3>
<p style="margin-bottom:16px">La Empresa le otorga una licencia intransferible, no exclusiva y limitada para usar el Sitio con fines informativos. Usted no puede licenciar ni explotar comercialmente los recursos del Sitio sin consentimiento formal.</p>
<h3 style="color:#fff;font-size:18px;margin-top:24px;margin-bottom:12px">2. Contenido del Usuario e Indemnización</h3>
<p style="margin-bottom:16px">Todo material compartido se tratará con estricta confidencialidad. Usted sigue siendo responsable de las implicaciones normativas de los materiales originales de su firma.</p>
<h3 style="color:#fff;font-size:18px;margin-top:24px;margin-bottom:12px">3. Limitación de Responsabilidad</h3>
<p style="margin-bottom:16px">Los servicios se proporcionan "tal cual". Sakka &amp; Co. inc asiste en compilar y redactar, pero la implementación final recae sobre la directiva del despacho.</p>
<h3 style="color:#fff;font-size:18px;margin-top:24px;margin-bottom:12px">4. Resolución de Disputas</h3>
<p style="margin-bottom:16px">Ambas partes se comprometen a una resolución de buena fe en 60 días previos a cualquier acción legal. Contáctenos en <a href="mailto:hola@manova.mx" style="color:#bda36e;text-decoration:underline">hola@manova.mx</a>.</p>
</div>`
        }
    },
    jp: {
        aviso: {
            title: 'プライバシーポリシー',
            html: `<div style="font-family:'Inter',sans-serif">
<p style="margin-bottom:24px;font-weight:500">このページでは、SAKKA 作家がサービスご利用時に情報をどのように収集・利用・共有・保護するかをご説明します。</p>
<p style="margin-bottom:24px">Sakka &amp; Co. inc は、専門事務所向け業務文書化の領域においてお客様のプライバシー保護に誠実に取り組んでいます。</p>
<h3 style="color:#fff;font-size:18px;margin-top:24px;margin-bottom:12px">1. 収集する情報</h3>
<p style="margin-bottom:16px">非個人情報（匿名の利用データ、参照URL）と個人情報（メールアドレス、氏名、事務所情報）を収集します。個人情報はサイトのフォームからご提供いただく場合に限ります。</p>
<h3 style="color:#fff;font-size:18px;margin-top:24px;margin-bottom:12px">2. 情報の利用と共有</h3>
<p style="margin-bottom:16px">お客様の明示的な同意なしに、マーケティング目的で個人情報を販売・共有することはありません。</p>
<h3 style="color:#fff;font-size:18px;margin-top:24px;margin-bottom:12px">3. 情報の保護</h3>
<p style="margin-bottom:16px">暗号化やSSL技術を用いて、不正アクセスから機関情報を保護しています。</p>
<h3 style="color:#fff;font-size:18px;margin-top:24px;margin-bottom:12px">4. 変更とお問い合わせ</h3>
<p style="margin-bottom:16px">Sakka &amp; Co. inc はいつでも本ポリシーを変更する権利を留保します。ご不明な点は <a href="mailto:hola@manova.mx" style="color:#bda36e;text-decoration:underline">hola@manova.mx</a> までお知らせください。</p>
</div>`
        },
        terminos: {
            title: '利用規約',
            html: `<div style="font-family:'Inter',sans-serif">
<p style="margin-bottom:24px;font-weight:500">本規約は、Sakka &amp; Co. inc が運営するウェブサイトおよび業務文書化成果物のご利用に適用されます。</p>
<p style="margin-bottom:24px">サイトにアクセスまたはサービスをご利用いただくことで、本規約に同意されたものとみなします。</p>
<h3 style="color:#fff;font-size:18px;margin-top:24px;margin-bottom:12px">1. サイトへのアクセス</h3>
<p style="margin-bottom:16px">本規約に従い、会社はお客様に対してサイトを情報目的で使用するための非独占的・限定的ライセンスを付与します。正式な同意なしにリソースを商業的に利用することは禁止されています。</p>
<h3 style="color:#fff;font-size:18px;margin-top:24px;margin-bottom:12px">2. ユーザーコンテンツと補償</h3>
<p style="margin-bottom:16px">ご提供いただくすべての資料は厳格な守秘義務のもとで管理されます。お客様の原資料に含まれる法的問題についてはお客様の責任に帰します。</p>
<h3 style="color:#fff;font-size:18px;margin-top:24px;margin-bottom:12px">3. 責任の制限</h3>
<p style="margin-bottom:16px">すべての成果物は「現状有姿」で提供されます。Sakka &amp; Co. inc はコンパイル・執筆をサポートしますが、最終的な実装は事務所の経営陣の責任となります。</p>
<h3 style="color:#fff;font-size:18px;margin-top:24px;margin-bottom:12px">4. 紛争解決</h3>
<p style="margin-bottom:16px">両当事者は法的措置の前に60日間の誠実交渉による解決に努めます。お問い合わせは <a href="mailto:hola@manova.mx" style="color:#bda36e;text-decoration:underline">hola@manova.mx</a> まで。</p>
</div>`
        }
    }
};

// =============================================================
//  renderCarousel — aplica traducciones del carousel activo
// =============================================================
function renderCarousel(lang) {
    const slides = carouselData[lang] || carouselData.es;
    const items  = document.querySelectorAll('.carousel-item');
    items.forEach((item, idx) => {
        const t = slides[idx];
        if (!t) return;

        const qs    = (sel) => item.querySelector(sel);
        const qsAll = (sel) => item.querySelectorAll(sel);

        if (qs('.cs-header span')) qs('.cs-header span').textContent = t.label;
        if (qs('.cs-header h2'))   qs('.cs-header h2').textContent   = t.title;
        if (qs('.cs-before h3'))   qs('.cs-before h3').textContent   = t.beforeTag;
        if (qs('.cs-before p'))    qs('.cs-before p').textContent    = t.beforeIntro;
        qsAll('.cs-before li').forEach((li, i) => { if (t.beforeItems[i] != null) li.textContent = t.beforeItems[i]; });
        if (qs('.cs-after h3'))    qs('.cs-after h3').textContent    = t.afterTag;
        if (qs('.cs-after p'))     qs('.cs-after p').textContent     = t.afterIntro;
        qsAll('.cs-after li').forEach((li, i)   => { if (t.afterItems[i]  != null) li.innerHTML  = t.afterItems[i]; });
        if (qs('.cs-impact p'))    qs('.cs-impact p').innerHTML      = t.result;
    });
}

// =============================================================
//  setLang — cambia el idioma de toda la página
// =============================================================
function setLang(lang) {
    currentLang = lang;

    // 1. Atributo lang del <html>
    const root = document.getElementById('html-root');
    if (root) root.setAttribute('lang', lang === 'jp' ? 'ja' : 'es');

    // 2. Estado visual de los botones
    const btnEs = document.getElementById('btn-es');
    const btnJp = document.getElementById('btn-jp');
    if (btnEs) { btnEs.classList.toggle('lang-btn--active', lang === 'es'); btnEs.setAttribute('aria-pressed', String(lang === 'es')); }
    if (btnJp) { btnJp.classList.toggle('lang-btn--active', lang === 'jp'); btnJp.setAttribute('aria-pressed', String(lang === 'jp')); }

    // 3. Todos los elementos con data-es / data-jp
    document.querySelectorAll('[data-es][data-jp]').forEach(el => {
        const text = lang === 'jp' ? el.getAttribute('data-jp') : el.getAttribute('data-es');
        if (text) el.textContent = text;
    });

    // 4. Footer links — explícito por ID (doble seguridad)
    const avisoLink    = document.getElementById('link-aviso');
    const terminosLink = document.getElementById('link-terminos');
    if (avisoLink)    avisoLink.textContent    = lang === 'jp' ? 'プライバシーポリシー'  : 'AVISO DE PRIVACIDAD';
    if (terminosLink) terminosLink.textContent = lang === 'jp' ? '利用規約'              : 'TERMINOS DE SERVICIO';

    // 5. Carousel
    renderCarousel(lang);
}

// =============================================================
//  Botones de idioma
// =============================================================
document.getElementById('btn-es')?.addEventListener('click', () => setLang('es'));
document.getElementById('btn-jp')?.addEventListener('click', () => setLang('jp'));

// =============================================================
//  CAROUSEL — animación de tarjetas
// =============================================================
try {
    const carouselItems = document.querySelectorAll('.carousel-item');
    if (carouselItems.length > 0) {
        let activeIndex = 0;

        function updateCarousel() {
            carouselItems.forEach((item, index) => {
                item.classList.remove('active', 'next', 'prev', 'next-shadow', 'prev-shadow');
                const diff = (index - activeIndex + carouselItems.length) % carouselItems.length;
                if      (diff === 0)                         item.classList.add('active');
                else if (diff === 1)                         item.classList.add('next');
                else if (diff === 2)                         item.classList.add('next-shadow');
                else if (diff === carouselItems.length - 2)  item.classList.add('prev-shadow');
                else if (diff === carouselItems.length - 1)  item.classList.add('prev');
            });
        }

        document.querySelector('.next-btn')?.addEventListener('click', () => { activeIndex = (activeIndex + 1) % carouselItems.length; updateCarousel(); });
        document.querySelector('.prev-btn')?.addEventListener('click', () => { activeIndex = (activeIndex - 1 + carouselItems.length) % carouselItems.length; updateCarousel(); });

        carouselItems.forEach((item) => {
            item.addEventListener('click', () => {
                if (item.classList.contains('prev') || item.classList.contains('prev-shadow')) {
                    activeIndex = (activeIndex - 1 + carouselItems.length) % carouselItems.length; updateCarousel();
                } else if (item.classList.contains('next') || item.classList.contains('next-shadow')) {
                    activeIndex = (activeIndex + 1) % carouselItems.length; updateCarousel();
                }
            });
        });

        updateCarousel();
    }
} catch (err) { console.error('Carousel:', err); }

// =============================================================
//  LEGAL PANEL — abre en el idioma activo
// =============================================================
try {
    const legalPanel    = document.getElementById('legal-panel');
    const legalTitleEl  = document.getElementById('legal-title');
    const legalBodyEl   = document.getElementById('legal-content');

    function openLegalPanel(key) {
        const data = (legalData[currentLang] || legalData.es)[key];
        if (legalTitleEl) legalTitleEl.innerText   = data.title;
        if (legalBodyEl)  legalBodyEl.innerHTML    = data.html;
        if (legalPanel)   legalPanel.style.display = 'block';
        setTimeout(() => legalPanel?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }

    document.getElementById('link-aviso')?.addEventListener('click',    e => { e.preventDefault(); openLegalPanel('aviso'); });
    document.getElementById('link-terminos')?.addEventListener('click',  e => { e.preventDefault(); openLegalPanel('terminos'); });
    document.getElementById('close-legal')?.addEventListener('click',   () => { if (legalPanel) legalPanel.style.display = 'none'; });
} catch (err) { console.error('Legal panel:', err); }

// =============================================================
//  MOBILE MENU
// =============================================================
try {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
} catch (err) { console.error('Mobile menu:', err); }

// =============================================================
//  SMOOTH SCROLL FOR ANCHOR LINKS
// =============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
