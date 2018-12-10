import * as Utils from 'web3-utils';
import GetBlockNumberMethod from '../../../../src/methods/block/GetBlockNumberMethod';

// Mocks
jest.mock('Utils');

/**
 * GetBlockNumberMethod test
 */
describe('GetBlockNumberMethodTest', () => {
    let method;

    beforeEach(() => {
        method = new GetBlockNumberMethod({}, Utils, {});
    });

    it('rpcMethod should return eth_blockNumber', () => {
        expect(method.rpcMethod)
            .toBe('eth_blockNumber');
    });

    it('parametersAmount should return 0', () => {
        expect(method.parametersAmount)
            .toBe(0);
    });

    it('beforeExecution should do nothing with the parameters', () => {
        method.parameters = [];
        method.beforeExecution();

        expect(method.parameters[0])
            .toBe(undefined);
    });

    it('afterExecution should map theresponse', () => {
        Utils.hexToNumber
            .mockReturnValueOnce(100);

        expect(method.afterExecution('0x0'))
            .toBe(100);

        expect(Utils.hexToNumber)
            .toHaveBeenCalledWith('0x0');
    });
});