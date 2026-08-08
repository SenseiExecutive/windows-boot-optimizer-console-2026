{ WindowsBootOptimizer configuration unit }
unit WindowsBootOptimizerConfig;

interface

const
  APP_NAME = 'WindowsBootOptimizer';
  APP_CHANNEL = 'github-pages';
  APP_KEYWORD = 'windows boot optimizer';

type
  TAppPaths = record
    DataDir: string;
    LogFile: string;
  end;

function DefaultPaths: TAppPaths;

implementation

function DefaultPaths: TAppPaths;
begin
  Result.DataDir := 'data';
  Result.LogFile := 'data/agent.log';
end;

end.
