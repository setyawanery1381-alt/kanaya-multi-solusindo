# Lightweight Local HTTP Server for PT Kanaya Multi Solusindo Corporate Website
$port = 8080
$path = $PSScriptRoot
if (-not $path) { $path = Get-Location }

$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$port/"
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
    Write-Host "==========================================================" -ForegroundColor Cyan
    Write-Host "   WEBSITE PT KANAYA MULTI SOLUSINDO AKTIF!" -ForegroundColor Green
    Write-Host "   URL: $prefix" -ForegroundColor Yellow
    Write-Host "   Folder: $path" -ForegroundColor Gray
    Write-Host "   Buka browser di: $prefix" -ForegroundColor White
    Write-Host "   Tekan Ctrl+C di terminal ini untuk mematikan server." -ForegroundColor Gray
    Write-Host "==========================================================" -ForegroundColor Cyan

    # Launch default browser
    Start-Process $prefix

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        try {
            $urlPath = $request.Url.LocalPath.TrimStart('/')
            if ([string]::IsNullOrWhiteSpace($urlPath)) {
                $urlPath = "index.html"
            }

            # Normalize path separators
            $urlPath = $urlPath.Replace('/', [System.IO.Path]::DirectorySeparatorChar)
            $localFile = Join-Path $path $urlPath

            if (Test-Path $localFile -PathType Leaf) {
                $ext = [System.IO.Path]::GetExtension($localFile).ToLower()
                $mime = switch ($ext) {
                    ".html" { "text/html; charset=utf-8" }
                    ".htm"  { "text/html; charset=utf-8" }
                    ".css"  { "text/css; charset=utf-8" }
                    ".js"   { "application/javascript; charset=utf-8" }
                    ".json" { "application/json; charset=utf-8" }
                    ".png"  { "image/png" }
                    ".jpg"  { "image/jpeg" }
                    ".jpeg" { "image/jpeg" }
                    ".webp" { "image/webp" }
                    ".svg"  { "image/svg+xml" }
                    ".ico"  { "image/x-icon" }
                    Default { "application/octet-stream" }
                }

                $bytes = [System.IO.File]::ReadAllBytes($localFile)
                $response.ContentType = $mime
                $response.ContentLength64 = $bytes.Length
                $response.StatusCode = 200

                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($bytes, 0, $bytes.Length)
                }
            } else {
                $response.StatusCode = 404
                $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 File Not Found")
                $response.ContentLength64 = $errBytes.Length
                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
                }
            }
        } catch {
            Write-Host "Request handling note: $_" -ForegroundColor DarkGray
        } finally {
            $response.OutputStream.Close()
        }
    }
} catch {
    Write-Host "Server stopped: $_" -ForegroundColor Red
} finally {
    if ($listener.IsListening) {
        $listener.Stop()
    }
    $listener.Close()
}
