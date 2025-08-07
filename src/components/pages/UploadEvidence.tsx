import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, Link2, Trash2 } from "lucide-react";

export default function UploadEvidence() {
  const [uploadedFiles, setUploadedFiles] = useState([
    { id: 1, name: "teaching_certificate.pdf", type: "PDF", size: "2.3 MB" },
    { id: 2, name: "research_paper.pdf", type: "PDF", size: "1.8 MB" }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Upload Evidence</h1>
        <Button className="btn-academic">
          <Upload className="h-4 w-4 mr-2" />
          Upload Files
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="academic-card">
          <CardHeader>
            <CardTitle>File Upload</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">
                Drag and drop files here, or click to browse
              </p>
              <Button variant="outline">Choose Files</Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Supported formats: PDF, DOC, DOCX (Max 10MB per file)
            </p>
          </CardContent>
        </Card>

        <Card className="academic-card">
          <CardHeader>
            <CardTitle>Add Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">YouTube/Website URL</label>
              <input 
                className="w-full p-2 border rounded-lg" 
                placeholder="https://youtube.com/watch?v=..." 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <textarea 
                className="w-full p-2 border rounded-lg" 
                rows={3}
                placeholder="Brief description of the content"
              />
            </div>
            <Button className="w-full">
              <Link2 className="h-4 w-4 mr-2" />
              Add Link
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="academic-card">
        <CardHeader>
          <CardTitle>Uploaded Files</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {uploadedFiles.map((file) => (
              <div key={file.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">{file.name}</p>
                    <p className="text-sm text-muted-foreground">{file.type} • {file.size}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}