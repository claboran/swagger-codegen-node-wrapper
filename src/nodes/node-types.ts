export type ElemTypes =
    'xs:complexType'
    | 'xs:integer'
    | 'xs:positiveInteger'
    | 'xs:negativeInteger'
    | 'xs:nonPositiveInteger'
    | 'xs:nonNegativeInteger'
    | 'xs:byte'
    | 'xs:unsignedByte'
    | 'xs:short'
    | 'xs:unsignedShort'
    | 'xs:int'
    | 'xs:unsignedInt'
    | 'xs:long'
    | 'xs:unsignedLong'
    | 'xs:decimal'
    | 'xs:float'
    | 'xs:double'
    | 'xs:Boolean'
    | 'xs:string'
    | 'xs:time'
    | 'xs:dateTime'
    | 'xs:date'
    | 'xs:gYear'
    | 'xs:gYearMonth'
    | 'xs:gMonth'
    | 'xs:gMonthDay'
    | 'xs:gDay'
    ;

export interface ElementData {
    name: string;
    ref?: string;
    elemType: ElemTypes;
    minOccurs?: number;
    maxOccurs?: number;

}
