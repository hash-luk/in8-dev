import * as S from './styles';

export default function MobileTable() {
    return (
        <S.Container>
            <div id='table-header'>
                <p className='selected'>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
            </div>
            <div id='table-body'>
                <div>
                    <span>NOME</span> <span>Fulano Beltrano da Silva</span>
                </div>
                <div>
                    <span>E-MAIL</span> <span>fulanobs@gmail.com</span>
                </div>
                <div>
                    <span>NASC.</span> <span>13/10/1995</span>
                </div>
                <div>
                    <span>TEL</span> <span>(31) 9 9666-1111</span>
                </div>
            </div>
        </S.Container>
    )
}