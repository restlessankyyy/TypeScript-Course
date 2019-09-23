import { dataStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';
import { DataReader } from './DataReader';
import { CsvFileReader } from './CsvFileReader';

export class MatchReader {
    matches: MatchData[] = [];

    // Here is the composition through delegation.
    constructor(public reader: DataReader) {}

    static fromCsv(filename: string): MatchReader {
        return new MatchReader(new CsvFileReader(filename));
    }

    load(): void {
        this.reader.read();
        this.matches = this.reader.data.map((row: string[]): MatchData => [
            dataStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6]
        ]);
    }
}