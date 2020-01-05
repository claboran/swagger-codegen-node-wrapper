import {
    closeSchemaToString,
    closeSequenceNode,
    createElementNode,
    createSequenceNode,
    openSchemaRoot
} from "./node-functions";

describe('openSchemaRoot should ', () => {
    test('create a valid xsd frame doc', () => {
        expect(closeSchemaToString(openSchemaRoot())).toEqual(
            '<?xml version="1.0" encoding="utf-8"?>\n' +
            '<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"/>');
    });
});

describe('createElementNode should ', () => {

    test('create a simple xs:string type', () => {
        const doc = createElementNode(openSchemaRoot(), {name: 'test', elemType: "xs:string"});
        expect(closeSchemaToString(doc)).toEqual(
            '<?xml version="1.0" encoding="utf-8"?>\n' +
            '<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">\n' +
            '  <xs:element name="test" type="xs:string"/>\n' +
            '</xs:schema>'
        );
    });

    test('create a complex type', () => {
        const doc = createElementNode(openSchemaRoot(), {
            name: 'test',
            elemType: "xs:complexType",
            ref: 'TestType'
        });
        expect(closeSchemaToString(doc)).toEqual(
            '<?xml version="1.0" encoding="utf-8"?>\n' +
            '<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">\n' +
            '  <xs:element name="test" ref="TestType"/>\n' +
            '</xs:schema>'
        );
    });

    test('minOccurs / maxOccurs is processed successfully', () => {
        const doc = createElementNode(openSchemaRoot(), {
            name: 'test',
            elemType: "xs:complexType",
            ref: 'TestType',
            minOccurs: 0,
            maxOccurs: 5
        });
        expect(closeSchemaToString(doc)).toEqual(
            '<?xml version="1.0" encoding="utf-8"?>\n' +
            '<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">\n' +
            '  <xs:element name="test" ref="TestType" minOccurs="0" maxOccurs="5"/>\n' +
            '</xs:schema>'
        );
    });
});

describe('createSequenceNode should ', () => {
    test('create xs:elements has successfully', () => {
        const doc = createSequenceNode(openSchemaRoot());
        expect(closeSchemaToString(doc)).toEqual(
            '<?xml version="1.0" encoding="utf-8"?>\n' +
            '<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">\n' +
            '  <xs:sequence/>\n' +
            '</xs:schema>'
        );
    });

    test('create a simple xs:string type successfully with in a sequence node', () => {
        const doc = createElementNode(createSequenceNode(openSchemaRoot()),
            {name: 'test', elemType: "xs:string"});

        expect(closeSchemaToString(closeSequenceNode(doc))).toEqual(
            '<?xml version="1.0" encoding="utf-8"?>\n' +
            '<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">\n' +
            '  <xs:sequence>\n' +
            '    <xs:element name="test" type="xs:string"/>\n' +
            '  </xs:sequence>\n' +
            '</xs:schema>'
        );
    });

});
