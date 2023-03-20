function build-json
{
    $hashtable = @{}
    $files = (Get-ChildItem -Name -Exclude *.sh, *.txt, *.json, *.ps1, *.ts)
    $hashtable.files = [array]$files
    return $hashtable
}

$result = build-json
ConvertTo-Json $result > cards.json
