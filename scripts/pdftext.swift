// Prints the text of a PDF (macOS PDFKit). Used to check résumé content, e.g. for a phone number.
// Usage: swift scripts/pdftext.swift path/to/file.pdf
import PDFKit

guard CommandLine.arguments.count > 1,
      let doc = PDFDocument(url: URL(fileURLWithPath: CommandLine.arguments[1])) else {
  FileHandle.standardError.write("usage: swift scripts/pdftext.swift file.pdf\n".data(using: .utf8)!)
  exit(1)
}
print(doc.string ?? "")
