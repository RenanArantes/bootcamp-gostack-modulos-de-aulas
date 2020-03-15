import React from 'react';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img
                                src="https://static.netshoes.com.br/produtos/tenis-nike-flyby-mid-masculino/26/HZM-3021-026/HZM-3021-026_zoom1.jpg"
                                alt="Tênis"
                            />
                        </td>
                        <td>
                            <strong>Tenis</strong>
                            <span>R$500.00</span>
                        </td>
                        <td>
                            <div>
                                <button type="button">
                                    <MdRemoveCircleOutline
                                        size={20}
                                        color="#0099ff"
                                    />
                                </button>
                                <p>R$ 540540.00</p>
                                <button>
                                    <MdAddCircleOutline
                                        size={20}
                                        color="#0099ff"
                                    />
                                </button>
                            </div>
                        </td>
                        <td>
                            <strong>R$ 500.00</strong>
                        </td>
                        <td>
                            <button>
                                <MdDelete size={20} color="#0099ff" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </ProductTable>
            <footer>
                <button type="button">Finalizar pedido</button>
                <Total>
                    <span>TOTAL</span>
                    <strong>R$ 4400.00</strong>
                </Total>
            </footer>
        </Container>
    );
}
